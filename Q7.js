let n=5;
let i= 1;
while (i<=n){
    let j =1;
    while(j<=i){

        process.stdout.write(String(j));
        j++;
    }
    i++;
    process.stdout.write("\n");
}