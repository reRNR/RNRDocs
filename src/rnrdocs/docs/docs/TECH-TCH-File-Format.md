---
sidebar_position: 7
---

# Описание бинарного формата TECH/TCH

###### Date: 2018.10 | Version: 0.1 | Авторы: Александр Евдокимов

**Глоссарий**

**integer** - тип данных, целое положительное число.

**string** - тип данных, строка.

**Ссылки**

Шаблон формата TECH для 010 Editor. [Открыть](https://github.com/AlexKimov/HardTruck-RignRoll-file-formats/blob/master/formats/templates/TECH.bt)

## Оглавление
**1.** [Введение](#Введение)

**2.** [Общая структура формата](#Общая-структура-формата)

**3.** [Секции](#Секции)

 **3.1** Секция транспорта (управляемого игроком) 

   **3.1** [Заголовок секции](#Заголовок-секции)

   **3.2** [Параметры транспорта](#)

 **3.2** Секция транспорта (неуправляемого игроком), а также динамических объектов 

   **3.2.1** [Заголовок секции](#Заголовок-секции)

   **3.2.2** [Параметры объектов](#)

## 1. Введение
Этот документ описывает структуру формата файла **TECH**, используемого в игре **Дальнобойщики 2 (Версия 8)**. Формат **TECH** содержит параметры управляемых и неуправляемых транспортных средств в игре, а также параметры динамических объектов.

Все переменные, перечисленные в таблицах, показаны в порядке их следования в файле.

## 2. Общая структура формата

Формат **TECH** разделен на 3 основные секции (см [Табл. 1](#Таблица-1-Структура)). 

#### Таблица 1. Общая Структура формата **TECH**.

| №     | Секция                   | Ссылки    | 
| :---- | :------------------------ | :------------- |   
| **1** | Секция параметров транспорта под управлением игрока   |  См. [Таблица 2](#)   |
| **2** | Секция с атрибутами файлов                |  См. [Таблица 3](#)  |
| **3** | Секция параметров транспорта под управлением ИИ, а также дин. объектов | См. [Таблица 5](#)

## 3. Секции

### 3.1 Секция транспорта (управляемого игроком)

Секция состоит их заголовка (См. [Таблица 2](#)), а также следующих за ней блоков параметров транспортных средств (См. [Таблица 3](#)). Размер одной секции составляет **57** байт. Размер одного блока параметров составляет **2416** байт.

##### Таблица 2. Заголовок секции
| № | Тип данных   | Описание                                  | Значение         |
| :-- | :------ | :------------------------------------------- | :------------ |
| 1  |   |                             |  |