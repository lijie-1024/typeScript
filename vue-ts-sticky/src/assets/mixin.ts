import { Component, Vue, } from "vue-property-decorator";
declare module 'vue/types/vue' {
    interface Vue {
        form: Object
        handleSubmit(name: any): Promise<any>
        handleReset(name: any): void
    }
}
@Component
export default class TestMixins extends Vue {
    form: Object = {}
    handleSubmit(name: any): Promise<any> {
        return new Promise((resolve) => {
            resolve()
        })
    }
    handleReset(name: any): void {
        console.log(name)
        return name
    }
}