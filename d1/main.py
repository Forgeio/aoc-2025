file_name   = "input.txt"
max         = 100
password    = 0
current     = 50

with open(file_name, 'r') as file:
    for line in file:
        line = line.strip()
        if not line:
            continue

        direction = line[0]
        n = int(line[1:])

        if direction == "L":
            password += ((max - current) % max + n) // max
            current = (current - n) % max

        elif direction == "R":
            password += (current + n) // max
            current = (current + n) % max

print(password)