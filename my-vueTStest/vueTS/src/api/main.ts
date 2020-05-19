// api/main.ts
import request from '@/utils/request';

// get
export function getSomeThings(params:any) {
    return request({
        url: '/api/getSomethings',
    });
}

// post
export function postSomeThings(params:any) {
    return request({
        url: '/api/postSomethings',
        methods: 'post',
        data: params
    });
}
