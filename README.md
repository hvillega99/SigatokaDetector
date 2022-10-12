# SigatokaDetector
Sigatoka Detector es un proyecto de inteligencia artificial que tiene como objetivo determinar la presencia de sigatoka negra en hojas de banano. Utiliza una red neuronal convolucional implementada con Keras basada en la arquitectura VGG16.

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

## Descripción de la red neuronal
La red recibe imágenes RGB de 240x240 píxeles y devuelve un valor entre 0 y 1 que corresponde a la probabalidad de que la hoja tenga sigatoka negra. Las predicciones se realizan con un accuracy del 94%.

## Implementación y entrenamiento de la red
[![Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1yi9BIJqGhPf_ylGY-LC_0qdH7dfBeT2y?usp=sharing)

## Dataset
[![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/drive/folders/1yibfKGpwiYDCxwEzPnXFCKimu4cJhwTT?usp=sharing)

## GUI
La interfaz permite cargar tantas imágenes como el usuario requiera para posteriormente ejecutar el análisis y mostrar los resultados
![captura1](./images/captura1.jpg)
![captura2](./images/captura2.jpg)
![captura3](./images/captura3.jpg)
![captura4](./images/captura4.jpg)

## Autores
* [Edwars Sabando](https://github.com/Edwars1999)
* [Ricardo Vilcacundo](https://github.com/RicardoVilcacundo)
* [Héctor Villegas](https://github.com/hvillega99)

## Créditos
Las imágenes del dataset fueron tomadas de las siguientes fuentes:
* [Kaies Al Mahmud - Kaggle](https://www.kaggle.com/datasets/kaiesalmahmud/banana-leaf-dataset)
* [Godliver - GitHub](https://github.com/godliver/source-code-BBW-BBS/)
* [Harvard Dataverse](https://dataverse.harvard.edu/file.xhtml?fileId=6082183&version=1.0)
* [Y. Hailu - Mendeley Data](https://data.mendeley.com/datasets/rjykr62kdh/1)
* [E. Medhi - Mendeley Data](https://data.mendeley.com/datasets/4wyymrcpyz/1)
