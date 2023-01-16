#include <iostream>
using namespace std;

long long modPower(long long a, long long b, int mod) {
    long long res = 1;
    while (b > 0) {
        if ((b & 1) == 1) {
            res = (res * a) % mod;
        }
        a = (a * a) % mod;
        b = b >> 1;
    }
    return res;
}

int main() {
    long long a = 3978432;
    long long b = 5;
    long long mod = 1000000007;
    long long answer = modPower(a, b, mod);
    cout << answer << endl;
    return 0;
}
