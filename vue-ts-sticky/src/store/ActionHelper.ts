
import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum';


// 负责数据处理
class ActionHelper {
    // 获取loc数据
    dataHelper = new DataHelper('stickyData', 'id')
    // 获取页面展示所需的数组
    stickyList!: [ItemData];
    constructor() {
        this.stickyList = this.readData()
    };
    //取值
    readData(): [ItemData] {
        // 获取本地存的数组
        let arrLoc = this.dataHelper.readData();
        //2.将 Object数组 转成 ItemData数组
        let list = arrLoc.map((ele: any) => {
            let item: ItemData = new ItemData();
            item.id = ele.id;
            item.categoryId = ele.categoryId;
            item.title = ele.title;
            item.content = ele.content;
            item.createTime = ele.createTime;
            return item
        })
        return list
    };
    // 转换类型
    changeCategoryType(cateId: Category): string {
        let typeList = ['工作', '学习', '生活']
        return typeList[cateId]
    };
    // 新增
    add(item: ItemData): number {
        // 新增一个便签
        item.id = this.dataHelper.addData(item);
        // 更新页面
        this.stickyList.push(item);
        // 更新本地数据
        this.dataHelper.saveData(this.stickyList);
        return item.id
    };
    // 编辑
    edit(item: ItemData): void {
        // 找到值
        let editItem: ItemData | undefined = this.stickyList.find((e: ItemData) => e.id == item.id)
        // 更改值
        if (editItem) {
            editItem.title = item.title
            editItem.content = item.content
            editItem.categoryId = item.categoryId
            // 更新本地数据
            this.dataHelper.saveData(this.stickyList);
        }
    };
    // 删除
    remove(id: number): void {
        // 找到itme
        let index: number = this.stickyList.findIndex((e: ItemData) => e.id == id)
        if (index > -1) {
            // 删除这一项
            this.stickyList.splice(index, 1);
            // 更新两端的数据
            this.dataHelper.saveData(this.stickyList);
        }
    }
}

export default ActionHelper
