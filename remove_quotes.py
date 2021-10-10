import os


def main():
    with open(input_file, encoding='utf8', newline='') as f:
        lines = f.readlines()
        for line in lines:
            line = line.replace("\"", "")
            write(line)


def write(line):
    if os.path.exists(output_file):
        write_mode = 'a'  # append to file if it already exists
    else:
        write_mode = 'w'  # create the file if not

    with open(output_file, write_mode, encoding='utf8', newline='') as f:
        f.write(line)


if __name__ == '__main__':
    input_file = "C:\\Users\\itllb\\Documents\\SaseHack\\sasehackfall2021\\training2.json"
    output_file = "C:\\Users\\itllb\\Documents\\SaseHack\\sasehackfall2021\\training2.txt"
    main()
