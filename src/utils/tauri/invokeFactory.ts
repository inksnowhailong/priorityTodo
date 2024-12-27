import { invoke } from "@tauri-apps/api/core";
/**
 * @description: 策略对象接口
 * @return {*}
 */
interface InvokeStrategy<D extends Record<string,any>,R> {
     invoke(data:D):Promise<R>
 }


/**
 * @description: 策略上下文
 * @return {*}
 */
export class invokeContext<D extends Record<string, any>,R> {
    strategy:InvokeStrategy<D,R>|null=null;
    setStrategy(strategy:InvokeStrategy<D,R>){
        this.strategy = strategy;
    }
   async execute(data:D):Promise<R>{
        this.validStrategy();
       return await  this.strategy!.invoke(data);
    }
    validStrategy(){
        if(this.strategy===null){
            throw new Error("先设置一个策略");
        }
    }
}

/**
 * @description: invok_command的策略抽象类
 * @return {*}
 */
export abstract class InvokeCommandStrategy<D extends Record<string,any>,R> implements InvokeStrategy<D,R>{
    abstract commandKey:string;
    async invoke(data:D):Promise<R>{
     return  await invoke("invok_command", {
           command: this.commandKey,
           jsonData: JSON.stringify(data),
         });
    }
}
