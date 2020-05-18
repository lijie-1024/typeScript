// 操作
class DataHelper {
    jsonKey: string;//localStroage中存的文件名
    contId: string; //主键名称
    constructor(jsonKey: string, contId: string) {
        this.jsonKey = jsonKey
        this.contId = contId
    };
    //取值
    readData(): any {
        //1.读取 本地数据(根据dataKey读取)
        let localJson: string | null = localStorage.getItem(this.jsonKey)
        //2.将 读取的 json数组字符串 转成数组对象
        let arrData: any = [];
        if (localJson != null) {
            arrData = JSON.parse(localJson);
        }
        //3.返回 数组对象
        return arrData;
    }
    // 存值
    saveData(arrData: [object]): void {
        //1.将数组 转成 json字符串
        let localJson: string | null = JSON.stringify(arrData)
        //2.将字符串 保存到 本地 localStorage 中
        localStorage.setItem(this.jsonKey, localJson)
    }
    // 新增
    addData(newDataObj: any): number {
        // 1.拿到本地数据
        let arr: any = this.readData()
        // 3.自动生成主键id
        let newId = arr.length > 0 ? arr[arr.length - 1][this.contId] + 1 : 1
        // 2.创建一个新的评论对象并赋值
        newDataObj[this.contId] = newId;
        // 4.将对象增加到数组中
        arr.push(newDataObj)
        // 5.保存新的数组
        this.saveData(arr)
        // 6.返回新的id
        return newId
    }
    // 删除
    deletData(id: number | string): boolean {
        // 读取本地数组
        let arr: any = this.readData()
        // 找到对象
        let index = arr.findIndex((e: any) => e[this.contId] == id)
        // 删除对象--如果大与-1就能找到
        if (index > -1) {
            arr.splice(index, 1)
            this.saveData(arr)
            return true
        }
        return false
    }
}


export default DataHelper;

