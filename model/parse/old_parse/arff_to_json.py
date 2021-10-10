import json
import os
from scipy.io import arff


def main():
    with open(input_file, encoding='utf8', newline='') as f:
        data, meta = arff.loadarff(f)
        data = data.tolist()
        metadata = list(meta)
        lst = []
        for i in range(len(data)):
            dic = {}
            data[i] = list(data[i])
            for j in range(len(data[i])):
                metadata[j] = metadata[j].replace("\"", "")
                dic[metadata[j]] = int(data[i][j])  # associate metadata attributes with actual data
            lst.append(dic)  # appends the dict for this line to the list
        write(lst)


def write(data):
    if os.path.exists(output_file):
        write_mode = 'a'  # append to file if it already exists
    else:
        write_mode = 'w'  # create the file if not

    with open(output_file, write_mode, encoding='utf8', newline='') as f:
        json.dump(data, f, indent=4)


if __name__ == '__main__':
    input_file = "C:\\Users\\itllb\\Documents\\SaseHack\\sasehackfall2021\\training2.arff"
    output_file = "C:\\Users\\itllb\\Documents\\SaseHack\\sasehackfall2021\\training2.json"
    main()
