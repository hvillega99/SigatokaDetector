from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse, HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from typing import List

import cv2
import numpy as np

from tensorflow.keras.models import load_model

model = load_model('./model/model.keras')

app = FastAPI()

app.mount("/public", StaticFiles(directory="./public"), name="public")

@app.get("/", response_class=HTMLResponse)
def root():
    return FileResponse('./public/index.html')


@app.post("/prediction")
async def predict(files:List[UploadFile] = File(...)):
    result = dict()
    images = []
    try:
        for file in files:
            img = await file.read()
            arr = to_arr(img, cv2.IMREAD_COLOR)
            arr = cv2.resize(arr, (240, 240), interpolation= cv2.INTER_LINEAR)
            arr = arr/255
            images.append(arr)

        images = np.array(images)

        y = model.predict(images)

        for i in range(len(y)):
            result[files[i].filename] = str(y[i][0])

        return JSONResponse(content=result)
    except print(0):
        pass
    return JSONResponse(content={"message": "Error"})


def to_arr(img, cv2_img_flag=0):
    img_array = np.asarray(bytearray(img), dtype=np.uint8)
    return cv2.imdecode(img_array, cv2_img_flag)