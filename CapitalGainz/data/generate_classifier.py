import json
import csv

with open('top25capital.json') as data_file:
    data = json.load(data_file)
for i in data:
    string = ''
    for x in i:
        if x != 'type':
            string += str(i[x]) + ','
        else:
            string += str(i[x])
    print string
