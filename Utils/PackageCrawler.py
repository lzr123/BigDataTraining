from scapy.sendrecv import sniff

if __name__ == '__main__':

    pacap = sniff(count=100)
    print(pacap[1].show())