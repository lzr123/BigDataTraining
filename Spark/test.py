import json

data = []
with open('./barrage_send_time.json', 'r') as file:
    data = file.readlines()
    # data = json.load(file)

print(data)

json_data = []
for item in data:
    j = json.loads(item)
    # j = json.loads(j)
    json_data.append(j)

print(type(json_data[0]))
