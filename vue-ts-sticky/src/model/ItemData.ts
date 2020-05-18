/**
 * 书写数据格式的页面
 * 需要的格式是：
 */
// const egData: object[] = [
//     {
//         id: 1,
//         categoryId: 0,
//         title: '便签的标题',
//         content: '便签的内容',
//         createTime: '2020-4-26'
//     },
//     {
//         id: 2,
//         categoryId: 1,
//         title: '便签2的标题',
//         content: '便签2的内容',
//         createTime: '2020-4-25'
//     }
// ]

/**
 * 构造对象便签的单个函数
 *  id: number ;主键id
 *  categoryId!: number;类型id 要使用到枚举enume(Category)
 *  title!: string;标题
 *  content!: string;内容
 *  createTime: string = new Date().toString();创建时间
 */
import Category from './CateEnum'

class ItemData {
    public id: number;
    public categoryId!: number;
    public title!: string;
    public content!: string;
    public createTime: string = new Date().toString();
    constructor(id: number = -1, categoryId: Category = 0, title: string = "", content: string = "") {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr()
    }
    // 格式化时间的函数
    toSelfDateStr(): string {
        let date = new Date(Date.now());
        let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            + ' ' + date.getHours() + ':' + date.getMinutes();
        return str
    }
}

export default ItemData

