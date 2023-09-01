import csv

data = []

# open the file in the write mode
f = open("D:/programming/Upwork/cloneai_2/Calculations/stockFormated.csv", 'w')

writer = csv.writer(f)

with open("D:/programming/Upwork/cloneai_2/Calculations/stock.csv", 'r') as file:
  csvreader = csv.reader(file, delimiter=';')
  for row in csvreader:
    #sp=row[3].replace(",",".")
    #sp=sp/1000
    newrow={
        "name":row[0],
        "S&P500":row[1].replace(",","."),
        "NASDAQ":row[2].replace(",","."),
        "CloneAi":row[3].replace(",","."),
    }
    data.append(newrow)

print(data)



# write a row to the csv file
writer.writerow(data)

# close the file
f.close()
