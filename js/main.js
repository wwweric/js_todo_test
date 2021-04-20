'use strict';

const onClickAdd = () => {
  // テキストボックスの値の取得＆初期化
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  // li~生成
  const li = document.createElement("li");
  li.className = "todo_list";
  const span = document.createElement("span");
  span.innerText = inputText;

  // button
  const conpleteButton = document.createElement("button");
  conpleteButton.innerText = "完了";
  conpleteButton.addEventListener("click" , () => {
    alert("完了");
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click" , () => {
    alert("削除");
  });


  li.appendChild(span);
  li.appendChild(conpleteButton);
  li.appendChild(deleteButton);

  // 未完了ulに追加
  document.getElementById("progress_list").appendChild(li);

  

};


document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("add_button").addEventListener("click", () => onClickAdd());

}, false);