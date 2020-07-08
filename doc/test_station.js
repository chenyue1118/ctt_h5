const fs = require('fs');

fs.readFile('./source.txt', 'utf8', (err, data) => {
  if (!err) {
    // console.log(data);
    console.log(typeof data)
    const sourceStr = data
    const sourceArr = data.split('|')
    const sequenceArr0 = []
    const sequenceArr1 = []
    const sequenceArr2 = []
    const sequenceArr3 = []
    const sequenceArr4 = []
    sourceArr.forEach((item, index) => {
      const type = index % 5    // 0 , 1, 2, 3, 4
      switch (type) {
        case 0:
          sequenceArr0.push(item)
          break;
        case 1:
          sequenceArr1.push(item)
          break;
        case 2:
          sequenceArr2.push(item)
          break;
        case 3:
          sequenceArr3.push(item)
          break;
        case 4:
          sequenceArr4.push(item)
          break;
      }
    })
    try {
      console.log(sequenceArr1.length);
      console.log(sequenceArr2.length);
      console.log(sequenceArr3.length);
      fs.writeFileSync('./1name.txt', JSON.stringify(sequenceArr1))
      fs.writeFileSync('./2code.txt', JSON.stringify(sequenceArr2))
      fs.writeFileSync('./3pinying.txt', JSON.stringify(sequenceArr3))
    } catch (e) {
      console.log(e);
    }

    // {
    //   拼音
    //   拼音转换
    //   首字母大写
    //   名称
    //   简码
    // }
    const sequenceArr3Copy = [...sequenceArr3]
    const sequenceArr3Copys = []
    sequenceArr3Copy.map((item) => {
      const items = firstCap(item)
      sequenceArr3Copys.push(items)
    })

    fs.writeFileSync('./3pinyingCap.txt', JSON.stringify(sequenceArr3Copys))

    // const testStr = suffix('beijingbei')
    // console.log('testStr', testStr)


    const andArr = []
    sequenceArr3.forEach((item, index) => {
      andArr.push({
        py: sequenceArr3[index],
        pyC: sequenceArr3Copys[index],
        name: sequenceArr1[index],
        code: sequenceArr2[index]
      })
    })

    fs.writeFileSync('./1_5.txt', JSON.stringify(andArr))

    const andObj = {}
    sequenceArr3.forEach((item, index) => {
      andObj[sequenceArr2[index]] = {
        py: sequenceArr3[index],
        pyC: sequenceArr3Copys[index],
        name: sequenceArr1[index],
        code: sequenceArr2[index]
      }
    })

    fs.writeFileSync('./1_5_obj.txt', JSON.stringify(andObj))






    // -------------------------------------------------------------------
    function firstCap(str){
      str = str.toLowerCase();
      var reg = /\b(\w)|\s(\w)/g; //  \b判断边界\s判断空格
      return str.replace(reg, function(m){
        return m.toUpperCase()
      });
    }

    // function suffixE(str){
    //   str = str.toLowerCase();
    //   var reg = /(dong)\b|(dong)\s/g; //  \b判断边界\s判断空格
    //   return str.replace(reg, function(m){
    //     // return m.toUpperCase()
    //     return ' East'
    //   });
    // }
    // function suffixS(str){
    //   str = str.toLowerCase();
    //   var reg = /(nan)\b|(nan)\s/g; //  \b判断边界\s判断空格
    //   return str.replace(reg, function(m){
    //     // return m.toUpperCase()
    //     return ' South'
    //   });
    // }
    // function suffixW(str){
    //   str = str.toLowerCase();
    //   var reg = /(xi)\b|(xi)\s/g; //  \b判断边界\s判断空格
    //   return str.replace(reg, function(m){
    //     // return m.toUpperCase()
    //     return ' West'
    //   });
    // }
    // function suffixN(str){
    //   str = str.toLowerCase();
    //   var reg = /(bei)\b|(bei)\s/g; //  \b判断边界\s判断空格
    //   return str.replace(reg, function(m){
    //     // return m.toUpperCase()
    //     return ' North'
    //   });
    // }

  }
})
