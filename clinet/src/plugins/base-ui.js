
import Headers from "../components/header"
import Nav from "../components/nav"
import MainHeader from "../components/main-header"
import List from "../components/list"
import Alert from "../components/alert/index"
export default {
    install(Vue){
        Vue.component('Header',Headers);
        Vue.component('Nav',Nav);
        Vue.component('MainHeader',MainHeader);
        Vue.component('List',List);
        let AlertClass = Vue.extend(Alert);
        Vue.prototype.$alerts = (text)=>{
            let aa = new AlertClass({
                propsData:{
                    text
                }
            });
            aa.$mount();
            document.body.appendChild(aa.$el)
        }
        
    }
}