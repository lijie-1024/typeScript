import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';
import { count, name } from '@/person'
import { componentA, componentB } from '@/components';

@Component({
    components:{ componentA, componentB},
})
export default class HelloWorld extends Vue{
	@Prop(Number) readonly propA!: number | undefined
    @Prop({ default: 'default value' }) readonly propB!: string
    @Prop([String, Boolean]) readonly propC!: string | boolean | undefined
  
  // 原data
  message = 'Hello'
  
  // 计算属性
	private get reversedMessage (): string[] {
  	return this.message.split('').reverse().join('')
  }
  // Vuex 数据
  @State((state: IRootState) => state . booking. currentStep) step!: number
	@Getter( 'person/name') name!: name
  
  // method
  public changeMessage (): void {
    this.message = 'Good bye'
  },
  public getName(): string {
    let storeName = name
    return storeName
  }
	// 生命周期
  private created ()：void { },
  private mounted ()：void { },
  private updated ()：void { },
  private destroyed ()：void { }
}
