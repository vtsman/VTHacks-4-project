import json
import requests
import random
import pandas as pd

from random import randrange
from datetime import datetime
from datetime import timedelta


def random_date(start, end):
    """
    This function will return a random datetime between two datetime 
    objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60)
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)


def zero():
    return "%.2f" % random.uniform(2, 5)


def one():
    return "%.2f" % random.uniform(5, 15)


def two():
    return "%.2f" % random.uniform(100, 150)


def three():
    return "%.2f" % random.uniform(300, 350)


def four():
    return "%.2f" % random.uniform(50, 80)


def five():
    return "%.2f" % random.uniform(2, 5)


def six():
    return "%.2f" % random.uniform(6, 10)


def six_2():
    return "%.2f" % random.uniform(15, 20)


def seven():
    return "%.2f" % random.uniform(20, 40)


def eight():
    return "%.2f" % random.uniform(40, 60)

# map the inputs to the function blocks
options = {0: zero,
           1: one,
           2: two,
           3: three,
           4: four,
           5: five,
           6: six,
           7: seven,
           8: eight,
           10: six_2
           }

result = [['Cereal',
           'Milk',
           'Oranges',
           'Apples',
           'Lettuce',
           'Tomatoes',
           'Eggs',
           'Juice',
           'Asparagus',
           'Beef',
           'Pork',
           'Chicken',
           'Cabbage',
           'Carrots',
           'Celery',
           'Broccoli',
           'Peas',
           'Brussels Sprouts',
           'Granola Bar',
           'Nuts'],

          ['Underwear',
           'Shirts',
           'Pants',
           'Detergent'],

          ['Electricity',
           'Heating',
           'Water',
           'Gas'],

          ['Rent',
           'Mortgage'],

          ['Car repair',
           'Computer repair',
           'House repair'],

          ['Oreos',
           'Skittles',
           'Mountain Dew',
           'Sprite',
           'Cheetos',
           'Cheez - Its',
           'Rice Krispies',
           'Ritz',
           'Cheese Stick',
           'Ice Cream',
           'Popsicle',
           'Coke',
           'Chips',
           'Cosmic Brownies',
           'Goldfish',
           'Donuts',
           'Cookies'],

          ['Fast food',
           'Formal dining'],

          ['Massage',
           'Movie',
           'Tanning',
           'Car Wash',
           'Gym membership'],

          ['Jewelry',
           'Videogames']]

rentCount = 0
mortgageCount = 0
electricityCount = 0
heatingCount = 0
waterCount = 0
gasCount = 0
for i in xrange(150):
    rand = random.randint(0, len(result) - 1)
    rand2 = random.randint(0, len(result[rand]) - 1)

    x = result[rand][rand2]
    d1 = datetime.strptime('2/1/2017', '%m/%d/%Y')
    d2 = datetime.strptime('2/18/2017', '%m/%d/%Y')
    date = random_date(d1, d2)
    if (rand == 2):
        if (rand2 == 0):
            if electricityCount > 0:
                continue
            else:
                electricityCount += 1
        elif rand2 == 1:
            if heatingCount > 0:
                continue
            else:
                heatingCount += 1
        elif rand2 == 2:
            if waterCount > 0:
                continue
            else:
                waterCount += 1
        elif rand2 == 3:
            if gasCount > 0:
                continue
            else:
                gasCount += 1
    if (rand == 3):
        if (rand2 == 0):
            if rentCount > 0 or mortgageCount > 0:
                continue
            else:
                rentCount += 1
        elif rand2 == 1:
            if mortgageCount > 0 or rentCount > 0:
                continue
            else:
                mortgageCount += 1

    if (rand == 6 and rand2 == 1):
        randTotal = options[10]()
    else:
        randTotal = options[rand]()
    data = {
        "merchant_id": "57cf75cea73e494d8675ec49",
        "medium": "balance",
        "purchase_date": str(date).split(' ')[0],
        "amount": float(randTotal),
        "description": x
    }
    headers = {'Content-Type': 'application/json'}
    r = requests.post(
        'http://api.reimaginebanking.com/accounts/58a914541756fc834d90559c/purchases?key=e27720efd690c95aeda7c6ed631b9b27', data=json.dumps(data), headers=headers)

    print r.text
