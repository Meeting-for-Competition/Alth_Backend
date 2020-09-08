module.exports = question;


function question(app, Question, rndstring, schedule){

  app.post('/addQuestion', async(req,res)=>{
    var queDB = new Question(req.body);
    let listNum = await Question.find()
    listNum = listNum.length;
    queDB.docNum = listNum + 1;
    queDB.token =  rndstring.generate(23);
    var resultCm = await queDB.save();    
    if(!resultCm.ok) res.status(200).json(queDB);
    else res.status(500).json({message : "fail!"});
  })

  .post('/getQuestion', async(req,res)=>{
    var a = Question.aggregate(
      [ { $sample: { size: 1} } ],
      function(err, result) {
          console.log(result);
          res.send(result);
      })
  })

}
