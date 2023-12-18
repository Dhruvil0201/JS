let input = document.querySelector(".display");

const display = (btnValue) => {
  console.log("Click", btnValue);

  input.value += btnValue;
};

const reset = () => {
  input.value = "0";
};


const calculate = () => {
  let str = input.value;

  let ans = eval(str);

  if (ans == undefined){
    ans = "" ;
  }
  input.value = ans;

};

function backSpace() {
  input.value = input.value.slice(0, -1);
}
  