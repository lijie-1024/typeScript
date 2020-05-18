// 初始化一个评论
const json: any = [
    {
        id: 1,
        data: '文章很好!'
    },
    {
        id: 2,
        data: '哈哈哈哈哈'
    },
]
let jsonData: string = JSON.stringify(json)
localStorage.setItem('ts-demo1', jsonData)

// 使用class来完成该功能

class ContData {
    jsonKey: string;//ts-domo1
    contId: string; //主键名称
    constructor(jsonKey: string, contId: string) {
        this.jsonKey = jsonKey
        this.contId = contId
    };
    // 取值
    readData(): any {
        let localJson: string | null = localStorage.getItem(this.jsonKey)
        if (localJson !== null) {
            return JSON.parse(localJson)
        }
    }
    // 存值
    saveData(arrData: object[]): void {
        let localJson: string | null = JSON.stringify(arrData)
        localStorage.setItem(this.jsonKey, localJson)
    }
    // 渲染
    // 新增
    addData(data: string): number {
        // 1.拿到本地数据
        let arr: any = this.readData()
        // 2.创建一个新的评论对象并赋值
        let newObj: any = {
            "data": data
        }
        // 3.自动生成主键id
        let newId = arr.length > 0 ? arr[arr.length - 1][this.contId] + 1 : 1
        newObj[this.contId] = newId
        // 4.将对象增加到数组中
        arr.push(newObj)
        // 5.保存新的数组
        this.saveData(arr)
        // 6.返回新的id
        return newId
    }
    // 删除
    deletData(id: number | string) {
        let arr: any = this.readData()
        let index = arr.findIndex(e => e[this.contId] == id)
    }

}

// 进入页面后取值赋值给页面
let textBox: any = document.getElementById('textBox')


