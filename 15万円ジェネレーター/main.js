function zoom(scale)
{
  window.parent.document.body.style.zoom = scale;
}

function calc()
{
  let failed_msg = "結果: 失敗 \n%replace%円足りません";
  let result = "";

  let p10000 = isNaN(parseInt(document.getElementById('paper_10000').value, 10)) ? 0 : parseInt(document.getElementById('paper_10000').value, 10);
  let p5000 = isNaN(parseInt(document.getElementById('paper_5000').value, 10)) ? 0 : parseInt(document.getElementById('paper_5000').value, 10);
  let p1000 = isNaN(parseInt(document.getElementById('paper_1000').value, 10)) ? 0 : parseInt(document.getElementById('paper_1000').value, 10);

  let cs500 = isNaN(parseInt(document.getElementById('coin_stick_500').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_500').value, 10) * 50;
  let c500 = isNaN(parseInt(document.getElementById('coin_500').value, 10)) ? cs500 : parseInt(document.getElementById('coin_500').value, 10) + cs500;

  let cs100 = isNaN(parseInt(document.getElementById('coin_stick_100').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_100').value, 10) * 50;
  let c100 = isNaN(parseInt(document.getElementById('coin_100').value, 10)) ? cs100 : parseInt(document.getElementById('coin_100').value, 10) + cs100;

  let cs50 = isNaN(parseInt(document.getElementById('coin_stick_50').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_50').value, 10) * 50;
  let c50 = isNaN(parseInt(document.getElementById('coin_50').value, 10)) ? cs50 : parseInt(document.getElementById('coin_50').value, 10) + cs50;

  let cs10 = isNaN(parseInt(document.getElementById('coin_stick_10').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_10').value, 10) * 50;
  let c10 = isNaN(parseInt(document.getElementById('coin_10').value, 10)) ? cs10 : parseInt(document.getElementById('coin_10').value, 10) + cs10;

  let cs5 = isNaN(parseInt(document.getElementById('coin_stick_5').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_5').value, 10) * 50;
  let c5 = isNaN(parseInt(document.getElementById('coin_5').value, 10)) ? cs5 : parseInt(document.getElementById('coin_5').value, 10) + cs5;

  let cs1 = isNaN(parseInt(document.getElementById('coin_stick_1').value, 10)) ? 0 : parseInt(document.getElementById('coin_stick_1').value, 10) * 50;
  let c1 = isNaN(parseInt(document.getElementById('coin_1').value, 10)) ? cs1 : parseInt(document.getElementById('coin_1').value, 10) + cs1;

  let to = 150000;

  if (p10000 >= 15)
  {
    result = '10000円 ---> 15';
    alert(result);
  }
  else
  {
    let i = 10000 * p10000;
    to = to - i;
    result = result + '10000円 ---> ' + p10000;

    if (p5000 * 5000 >= to)
    {
      let v = to / 5000;
      result = result + '\n  5000円 ---> ' + v;
      alert(result);
    }
    else
    {
      i = 5000 * p5000;
      to = to - i;
      result = result + '\n  5000円 ---> ' + p5000;

      if (p1000 * 1000 >= to)
      {
        let v = to / 1000;
        result = result + '\n  1000円 ---> ' + v;
        alert(result);
      }
      else
      {
        i = 1000 * p1000;
        to = to - i;
        result = result + '\n  1000円 ---> ' + p1000;

        if (c500 * 500 >= to)
        {
          let v = to / 500;
          result = result + '\n    500円 ---> ' + v;
          alert(result);
        }
        else
        {
          i = 500 * c500;
          to = to - i;
          result = result + '\n    500円 ---> ' + c500;

          if (c100 * 100 >= to)
          {
            let v = to / 100;
            result = result + '\n    100円 ---> ' + v;
            alert(result);
          }
          else
          {
            i = 100 * c100;
            to = to - i;
            result = result + '\n    100円 ---> ' + c100;

            if (c50 * 50 >= to)
            {
              let v = to / 50;
              result = result + '\n      50円 ---> ' + v;
              alert(result);
            }
            else
            {
              i = 50 * c50;
              to = to - i;
              result = result + '\n      50円 ---> ' + c50;

              if (c10 * 10 >= to)
              {
                let v = to / 10;
                result = result + '\n      10円 ---> ' + v;
                alert(result);
              }
              else
              {
                i= 10 * c10;
                to = to - i;
                result = result + '\n      10円 ---> ' + c10;

                if (c5 * 5 >= to)
                {
                  let v = to / 5;
                  result = result + '\n        5円 ---> ' + v;
                  alert(result);
                }
                else
                {
                  i= 5 * c5;
                  to = to - i;
                  result = result + '\n        5円 ---> ' + c5;

                  if (c1 >= to)
                  {
                    let v = to;
                    result = result + '\n        1円 ---> ' + v;
                    alert(result);
                  }
                  else
                  {
                    let s = to - c1
                    result = failed_msg.replace('%replace%', s.toLocaleString());
                    alert(result);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
