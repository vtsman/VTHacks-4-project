import requests
import json
import csv

r = requests.get(
    'http://api.reimaginebanking.com/accounts/58a914541756fc834d90559c/purchases?amount=304.33&key=e27720efd690c95aeda7c6ed631b9b27')


values = json.loads(r.text)


with open('json_converted.csv', 'wb') as csvfile:
    fieldnames = ['status', 'medium', 'description', 'payer_id', 'payee_id',
                  'amount', 'purchase_date', 'merchant_id', '_id', 'type']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for val in values:
        writer.writerow(val)
