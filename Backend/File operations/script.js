const fs = require('fs');


    fs.writeFile('hello.txt','Hello backend world',function(err){

            if(err) console.log(err)
            else console.log('done')
    })

fs.appendFile('hello.txt',' this is appended text',function(err){

        if(err) console.log(err)
        else console.log('apended')

})

fs.rename('hello.txt','hey.txt',function(err){

        if(err) console.log(err)
        else console.log('renamed')
})

fs.copyFile('hey.txt','./copy/copyhey.txt',function(err){

        if(err) console.log(err)
        else console.log('copied')
})

fs.unlink('hey.txt',function(err){
        if(err) console.log(err)
                else console.log('deleted')
})

fs.rm('./copy',{recursive:true},function(err){

        if(err) console.log(err)
                else console.log('deleted')
})

 
 fs.readFile('hello.txt','utf8',function(err,data){

        if(err) console.log(err)
                else console.log(data)
 })