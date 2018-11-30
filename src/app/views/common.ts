export class Common {
  // 初始化页面的组件
  public static initComponentState(componentArray) {
    // Object.defineProperty(this.componentArray, 'isPassArr', { value: [] });

    Object.defineProperties(componentArray, {
      'isPassArr': { value: [] },
    });
    // console.log(componentArray);
    componentArray.forEach((element, i, arr) => {
      let isPass: boolean;
      if (element.passCondition && element.passCondition.state) {

        isPass = false;

      } else {
        isPass = true;
        arr.isPassArr.push(element);
      }
      // if (element.passCondition === '') {
      //     isPass = true;
      // } else if (element.passCondition === 'start') {
      //     isPass = false;
      // } else if (element.passCondition === 'complete') {
      //     isPass = false;
      // }
      Object.assign(element, {
        isPass,
        publish: {},
      });
      Object.defineProperties(element, {
        'id': {
          value: element.id,
        },
        'type': {
          value: element.type,
        }
        // 等等.
      });

      // 解析组件状态数组
      if (Array.isArray(element.stateArray)) {
        element.stateArray.forEach((v, j, arr2) => {

          Object.defineProperty(arr2, v.id, { value: v });
          if (Array.isArray(arr2.textArray))
            arr2.textArray.sort(this.compare('order'));
        });

        // 设置组件初始化状态id
        this.setCurrentStateID(element, element.currentStateID || element.initialStateID);
        // this.setCurrentStateID(element, element.initialStateID);

      }
      // this.componentArray[element.id] = element;
      Object.defineProperty(componentArray, element.id, { value: element });
    });
    // console.log(this.componentArray);


  }

  // 初始化组件事件状态
  public static initComponentPublish(componentArray, publishArray) {
    // const publishArray = this.instructionService.state.current.publishArray;
    // console.log(publishArray);


    Object.defineProperty(publishArray, 'sortArr', { value: [] });

    Object.assign(publishArray, {
      'progress': 0,
    });

    publishArray.forEach((element, i, arr) => {
      // console.log(element.component.id);
      if (!element.component || !element.component.id) {
        // console.log(element.component.id);
        return;
      }
      // console.log(this.componentArray[element.component.id]);
      if (!componentArray[element.component.id]) {
        console.error('找不到id为 ' + element.component.id + ' 的组件');
        return;
      }
      if (element.component) {
        const publish = componentArray[element.component.id].publish;
        if (!Array.isArray(publish[element.triggerEvent]))
          publish[element.triggerEvent] = [];
        publish[element.triggerEvent].push(element);
      }

      if (element.order) {
        arr.sortArr.push(element);
      }
    });

    // 对事件排序
    publishArray.sortArr.sort(this.compare('order'));
    let number1 = 1;
    let number2;
    publishArray.sortArr.forEach((v, i, arr) => {
      if (v.order === number2) {
        v.order = number1;
      } else if (v.order > number2) {
        number2 = v.order;
        v.order = ++number1;
      } else if (i === 0) {
        number2 = v.order;
        v.order = number1;
      }
    });

  }

  // 处理事件
  public static eventHandler(e, component, componentArray, publishArray, current) {
    let flag: boolean; // 标识是否处理事件
    // console.log(e.type, component.id);
    // console.log(component.publish[e.type]);
    if (!component.publish) return;
    // console.log(component.currentStateID);
    // console.log(component.publish[e.type].component.stateID);

    component.publish[e.type].forEach(publishObject => {
      if (publishObject.component.isPass === 1 && component.isPass === false) {
        console.log('未学习状态不发布此事件');
        return;
      } else if (publishObject.component.isPass === 0 && component.isPass) {
        console.log('学习过状态不发布此事件');
        return;
      }
      if (publishObject.component.stateID &&
        !(component.currentStateID === publishObject.component.stateID)) {
        console.log('stateID不同,,此时不能点击');
        return;
      }
      // 此页通过为false
      // ----------控制点击顺序------------
      // const publishArray = this.instructionService.state.current.publishArray;
      // console.log('当前事件order', publishObject.order);
      // console.log('事件progress', publishArray.progress);
      if (publishObject.order > (publishArray.progress + 1)) {
        console.log('需要按顺序点击');
        return;
      } else if (publishObject.order === (publishArray.progress + 1)) {
        // console.log('增加点击进度');
        publishArray.progress = publishObject.order;
      }



      publishObject.subscribeArray.forEach(ele => {
        this.responseEvent(ele, componentArray);
      });
      // console.log('发布是啊劲啊');
      flag = true;
    });

    if (flag) {
      // --------控制操作通过条件----------
      if (component.passCondition && !component.isPass) {
        console.log('更新并检测通过状态');
        if (component.passCondition.state === 'start') {
          // console.log(component.passCondition);
          if (component.passCondition.event === e.type) {
            //     console.log(component.passCondition);
            component.isPass = true;
            componentArray.isPassArr.push(component);
            // 检测通过操作,能否进入下一页
            this.checkPass(componentArray, current);
          }
        }
      }
    }

  }


  // 响应事件
  public static responseEvent(subscribe, componentArray) {
    // console.log(subscribe);
    // console.log(subscribe.setCurrentState);

    if (!subscribe.setCurrentState) return;


    const timeout = parseInt(subscribe.timeOut, 10);
    setTimeout(() => {
      const componentEle = componentArray[subscribe.component.id];

      if (!componentEle) {
        console.error('找不到id为 ' + subscribe.component.id + ' 的组件');
        return;
      }

      if (subscribe.component.isPass === 1 && componentEle.isPass === false) {
        console.log('未学习状态不响应事件');
        return;
      } else if (subscribe.component.isPass === 0 && componentEle.isPass) {
        console.log('学习过状态不响应事件');
        return;
      }

      if (subscribe.component.stateID &&
        !(componentEle.currentStateID === subscribe.component.stateID)) {
        console.log('stateID不同,此时不响应事件');
        // console.log(componentEle.id, componentEle.currentStateID);
        // console.log(subscribe.component.stateID);
        return;
      }


      this.setCurrentStateID(componentEle, subscribe.setCurrentState);

    }, timeout);


  }
  // 检测组件通过状态
  public static checkPass(componentArray, current) {

    if (componentArray.isPassArr.length === componentArray.length) {
      current.isPass = true;
    }
    // console.log(this.instructionService.state.current.isPass);
  }

  // 根据属性的值对数组排序
  private static compare(property: string) {
    return (a, b) => {
      const value1 = a[property];
      const value2 = b[property];
      return value1 - value2;
    };
  }
  // 设置组件状态
  private static setCurrentStateID(componentEle, id: string) {

    if (!componentEle.stateArray[id]) {
      // console.log(componentEle, id);
        console.log('没有此状态id');
        return;
    }
    Object.assign(componentEle, {
        currentStateID: id,
        currentState: componentEle.stateArray[id],
    });


    // console.log('v.style', v.style);
    Object.assign(componentEle, { currentStyle: {} }, );
    Object.assign(componentEle.currentStyle, componentEle.currentState.style.default, );

  }


};
