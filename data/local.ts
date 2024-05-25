

export default class LocalStore {

  static getCookieJson(){
    if(!document.cookie) document.cookie = '{}';
    let cookie = document.cookie;
    if(cookie.indexOf(';')){
      cookie = cookie.split(';').find(r => {
        try{
          JSON.parse(r);
          return true;
        } catch(e){}
        return false;
      })!;
    }
    return JSON.parse(cookie || '{}');
  }

  static setCookieJson(object){
    document.cookie = JSON.stringify(object);
    return object;
  }
  
  static set(key, value){
    const object = LocalStore.getCookieJson();
    object[key] = typeof value == "object" ? JSON.stringify(value) : value;
    LocalStore.setCookieJson(object);
    return this;
  }

  static get(key: string){
    return LocalStore.getCookieJson()[key];
  }

  static remove(key){
    const object = LocalStore.getCookieJson();
    delete object[key];
    LocalStore.setCookieJson(object);
    return this;
  }

}