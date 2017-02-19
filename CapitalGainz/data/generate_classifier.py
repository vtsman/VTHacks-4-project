import json
import csv
values = []
with open('top25capital.json') as data_file:
    data = json.load(data_file)
for i in data:
    string = ''
    for x in i:
        if i != 'type':
            string += str(data[i]) + ','
        else:
            string += str(data[i])
        print string

with open('nlp_classification.csv', 'wb') as csvfile:
    fieldnames = ['data', 'classification']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for val in values:
        writer.writerow({'data': val, 'classification': ''})
