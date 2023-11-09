$(document).ready(function() {
    $('#submitBtn').click(function() {
        var questions = document.querySelectorAll('.question');
        var total = 0;
        let answers = [];
    
        questions.forEach(function(question, index) {
            var selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer)  { 
                total++;
                const value = selectedAnswer.value;
                if (value && value !== "on") {
                    answers.push(value);
                }
            }
        });
        
        const result = answers.join('');
        const resultContainer = document.getElementById("result");
        const team = document.createElement("h2");
        const img = document.createElement("img");
       
        if(result == "AAAAABA" || result == "BBAAABA") {
            team.textContent = '"두산 베어스"';
            img.src = "https://cdn.viewreply.co.kr/news/photo/202109/20210903_1_bodyimg_125.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("두")
        } else if(result == "AABBBBA" || result == "BBBBBBA") {
            team.textContent = '"KT 위즈"';
            img.src = "http://file3.instiz.net/data/cached_img/upload/2023/02/08/23/d0021f576183544a2d92a27dbdc3e1e1.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);     
        } else if(result == "ABBBBBA" || result == "BABBBBA") {
            team.textContent = '"NC 다이노스"';
            img.src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F144%2F2023%2F05%2F21%2F0000888414_001_20230521141201249.jpg&type=sc960_832"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("엔")  
        } else if(result == "AABABBA" || result == "BBBABBA") {
            team.textContent = '"SSG 랜더스"';
            img.src = "https://www.sportsq.co.kr/news/photo/202108/431080_461363_5947.jpg"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("쓱")  
        } else if(result == "ABAAAAA" || result == "BAAAAAA") {
            team.textContent = '"KIA 타이거즈"';
            img.src = "https://t1.daumcdn.net/news/202105/22/crazzzybaseball/20210522123832492jlqk.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("갸")  
        } else if(result == "ABABAAB" || result == "BAABAAB") {
            team.textContent = '"롯데 자이언츠"';
            img.src = "https://sions.kr/data/editor/1909/1890564132_vmG4xrw5_47174f677846ee2205c2bc18be4ac8657bb2bb96.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("롯")  
        } else if(result == "ABAAAAB" || result == "BAAAAAB") {
            team.textContent = '"삼성 라이온즈"';
            img.src = "https://blog.kakaocdn.net/dn/bEEr6F/btqEbQMtYJT/f93K2cJuZs31zhQlC8k3a1/img.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("삼")  
        } else if(result == "ABABAAA" || result == "BAABAAA") {
            team.textContent = '"한화 이글스"';
            img.src = "http://file3.instiz.net/data/file3/2018/03/14/9/6/3/963ed72ede8d0b0399f9081f3e45d751.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("한")  
        }else if(result == "AABBBBB" || result == "BBBBBBB") {
            team.textContent = '"키움 히어로즈"';
            img.src = "https://cdn.hankooki.com/news/photo/202306/83241_112404_1686230624.png"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("큠")  
        } else if(result == "AAABABB" || result == "BBABABB") {
            team.textContent = '"LG 트윈스"';
            img.src = "https://mblogthumb-phinf.pstatic.net/20150526_48/doubledune__1432618510128yM4U4_JPEG/maturedfrom1994.jpg?type=w2"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("엘")  
        } else {
            team.textContent = '"두산 베어스"';
            img.src = "https://cdn.viewreply.co.kr/news/photo/202109/20210903_1_bodyimg_125.gif"; 
            resultContainer.appendChild(team);
            resultContainer.appendChild(img);
            console.log("두")
        }
    
        if (total == 20) {
            var view1 = document.getElementById("view1");
            var view2 = document.getElementById("view2");
            view1.style.display = "none";
            view2.style.display = "block";
        } else {
            alert("답변을 선택해 주세요.");
        }
    })

    $(document).ready(function() {
        $('#repBtn').click(function() {
            var view1 = document.getElementById("view1");
            var view2 = document.getElementById("view2");
            view1.style.display = "block";
            view2.style.display = "none";
            location.reload();
        })
    });
});