// JavaScript Document
1������ȥ��

����1:

//���������indexOf����
function unique (arr) {
 var result = []; 
 for (var i = 0; i < arr.length; i++)
 {
   if (result.indexOf(arr[i]) == -1) result.push(arr[i]);
 }
 return result;
}

����2��

//����hash��,���ܻ�����ַ���������һ���Ļ�������var a = [1, 2, 3, 4, '3', 5],�᷵��[1, 2, 3, 4, 5]
function unique (arr)
{
  var hash = {},result = []; 
  for(var i = 0; i < arr.length; i++)
  {
     if (!hash[arr[i]]) 
     {
         hash[arr[i]] = true; 
         result.push(arr[i]); 
       }
   }
   return result;
}

����3��

//�����Ƚ����ڣ����һ���������������뵽result��������뷽��2һ�������⣬��������д���1,1,'1'���������������Ŵ�
function unique (arr) {
  arr.sort();
  var result=[arr[0]];
  for(var i = 1; i < arr.length; i++){
      if( arr[i] !== arr[i-1]) {
          result.push(arr[i]);
      }
  }
  return result;
}

����4��

//��򵥵���Ч����͵��㷨,Ҳ������ַ���2�ͷ���3���ֵ�bug
function unique (arr) {
  if(arr.length == 0) return;
  var result = [arr[0]], isRepeate;
  for( var i = 0, j = arr.length; i < j; i++ ){
    isRepeate = false;
    for( var k = 0, h = result.length; k < h; k++){
        if(result[k] === arr[i]){
            isRepeate = true;
            break;
        }
        if(k == h) break;
    }
    if( !isRepeate ) result.push(arr[i]);
  }
  return result;
}

2������˳������

����1��

//ÿ�������һ�������ƶ�����������
function shuffle(array) {
  var copy = [],
       n = array.length,
       i;
  // �����ʣ��Ԫ�������������
  while (n) {
     // �����ȡһ��Ԫ��
     i = Math.floor(Math.random() * array.length);
     // ������Ԫ��֮ǰû�б�ѡ�й�����
     if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
     }
   }
}

����2��

//������1���ƣ�ֻ����ͨ��splice��ȥ��ԭ������ѡ��
function shuffle(array) {
  var copy = [],
       n = array.length,
       i;
  // �����ʣ��Ԫ�ء���
  while (n) {
     // ���ѡȡһ��Ԫ��
     i = Math.floor(Math.random() * n--);
     // �ƶ�����������
     copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

����3��

//ǰ������������θ�ĩβ������������������ǰ�ƣ�������һ��ǰn���������һ������n���������ڶ���ǰn-1��������n-1���������������ơ�
function shuffle(array) {
  var m = array.length,
     t, i;
  // �����ʣ��Ԫ�ء�
  while (m) {
    // ���ѡȡһ��Ԫ�ء�
    i = Math.floor(Math.random() * m--);
    // �뵱ǰԪ�ؽ��н���
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

3�������ж�

����1��

//�Դ���isArray����
var array6 = [];
Array.isArray(array6 );//true

����2��

//����instanceof�����
var array5 = [];
array5 instanceof Array;//true

����3��

//����toString�ķ���ֵ
function isArray(o) {
  return Object.prototype.toString.call(o) === ��[object Array]��;
}

4�������󽻼�

����1��

//����filter�������Դ���indexOf����
array1.filter(function(n) {
  return array2.indexOf(n) != -1
});

5�������󲢼�

����1��

//����ԭ�������������鲢ȥ��
function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
    for(var j=i+1; j<a.length; ++j) {
       if(a[i] === a[j])
          a.splice(j--, 1);
    }
  }
  return a;
};

6��������

����1��

//����filter��indexOf����
Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0;});
};