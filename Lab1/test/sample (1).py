import DNSStarter
print("abcd")
h = DNSStarter.DNSHeader(1234, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)
q = DNSStarter.DNSQuestion(['rte', 'ie'], 1, 1)
d = DNSStarter.DNSDatagram(h, [q], [])
b = DNSStarter.write_datagram(d)
print(b)
print("abcd")
dest = ('104.18.142.17', 53)
import socket
cxn = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
cxn.sendto(b, dest)
print("abcd")
r = cxn.recvfrom(4096)[0]
print("abcd")
print(r)

res = DNSStarter.read_datagram(r)
print(res.answers[0].rdata)
