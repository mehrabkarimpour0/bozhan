import {_middlewares} from "../../../../app/providers/AppContainer";


export function controller(controller: any, method: string) {
    let ctl = new controller()
    return ctl[method];
}

export function validate(validation: any) {
    let validationObg = new validation()
    return validationObg.validate()
}

export function handleErrors(validation: any) {
    let validationObg = new validation()
    return validationObg['handle']
}


export function middleware(middleware: string, parameters: any = null) {
    let middlewareCls = _middlewares.find((_middleware: any) => _middleware._name === middleware)
    if (middlewareCls) {
        middlewareCls.hasParams ? middlewareCls = new middlewareCls(parameters) : middlewareCls = new middlewareCls()
        return middlewareCls.run
    }
    throw new Error(`middleware dos not exists!`)
}

