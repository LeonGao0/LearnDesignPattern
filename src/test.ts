function returnHelloAndParam(bar: string): string {
    return 'Hello' + bar;
}

const paramStr: string = '123 ABC 456';

console.log(returnHelloAndParam(paramStr));
