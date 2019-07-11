# BigDataTraining

## Spyder

This branch is for spider which retrive data from www.bilibili.com. Please put your code and brief description of your code here if your job is implement the spider or part of it.

### Packages

#### 1. bilibili_spyder

==DO NOT RUN THE FILE ./BigDataTraining/spyder/bilibili_spyder IF YOU DO NOT KNOW WHAT YOU ARE DOING!!!==

​	This package contains a spider which crawls URLs pointing to the list of each video categories.

These URLs are stored behand these navigate buttons.

![1561287463179](1561287463179.png)

##### API

This spider will write result to a CSV file called `nav_btn_item.csv`, 

CSV record Format:

| Button title | URL                      |
| ------------ | ------------------------ |
| 首页         | www.bilibili.com/?type=1 |

and it also write records to Redis database.

The Redis key is: <u>bilibili:class_urls</u>

The video type code is appended at the tail of each URL string. The type codes are defined in file 	`GlobalParams.py`

#### 2. Barrage spider

Spider used to get barrage data. 

#### 3. Video spider

Spider used to get video details.

## Spark

Spark operator for data processing

## Front-end

Front end website and backend service.

## Utils

Project structure:

![1561430115166](1561430115166.png)



##### API

UrlUtils: 

- Add video type code to URL
- Remove video type code from URL
- Get video typed code from URL

RedisUtils:

- Create a new Redis key and insert URLs to it
- 
