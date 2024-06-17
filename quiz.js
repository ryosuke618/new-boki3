const questions = [
    // 資産
    { term: '現金', category: '資産', description: '硬貨や紙幣などの現金、銀行ですぐに換金できるもの。' },
    { term: '当座預金', category: '資産', description: '企業や個人事業主向けの、決済専用の銀行口座。' },
    { term: '普通預金', category: '資産', description: 'ATMで出金、入金などができる、一般の銀行口座。' },
    { term: '受取手形', category: '資産', description: '代金として約束手形を受け取り、期日に手形をお金と引き換える権利。' },
    { term: '売掛金', category: '資産', description: '商品を掛けで売った時に、後で代金がもらえる権利。' },
    { term: '繰越商品', category: '資産', description: '商品の在庫で、期をまたぐもの。' },
    { term: '前払金', category: '資産', description: '手付金、内金など、商品購入時に、先に支払うお金。後に商品を受け取る権利。' },
    { term: '未収入金', category: '資産', description: '商品以外の物を後払いで売却した時に、後でお金を受け取る権利。' },
    { term: '貯蔵品', category: '資産', description: '切手や文房具など、商品以外の物で、未使用のまま期をまたぐ物。' },
    { term: '仮払消費税', category: '資産', description: '商品の購入時に支払った消費税。' },
    { term: '仮払法人税等', category: '資産', description: '期の途中で概算額として支払う法人税等。' },
    { term: '備品', category: '資産', description: '固定資産の一つ。パソコンや机など、販売目的でなく、社内で1年以上利用するために購入した物。' },
    { term: '小口現金', category: '資産', description: '社内で発生する経費をすぐに精算するために手元に持っておく現金。' },
    { term: 'クレジット売掛金', category: '資産', description: '商品をクレジットカード払いで売った時に、後でクレジットカード会社から代金がもらえる権利。' },
    { term: '電子記録債権', category: '資産', description: '商品を掛けで売った時に、その取引の内容を電子化したもの。' },
    { term: '貸付金', category: '資産', description: '期限や利子を決めて貸すお金。' },
    { term: '立替金', category: '資産', description: '取引先や従業員が支払うべき代金を一時的に立て替えたお金。' },
    { term: '仮払金', category: '資産', description: '支出はしたがその内容が確定出来ていないお金。' },
    { term: '受取商品券', category: '資産', description: '商品の販売時に、代金として受け取った商品券。' },
    { term: '差入保証金', category: '資産', description: '敷金など、取引や賃貸借の契約の履行が保証されるよう支払うお金。' },
    { term: '前払利息', category: '資産', description: '来期の利息のうち、当期に支払済の利息。' },
    { term: '前払保険料', category: '資産', description: '来期の保険料のうち、当期に支払済の保険料。' },
    { term: '前払家賃', category: '資産', description: '来期の家賃のうち、当期に支払済の家賃。' },
    { term: '前払地代', category: '資産', description: '来期の地代のうち、当期に支払済の地代。' },
    { term: '前払費用', category: '資産', description: '来期の費用のうち、当期に支払済の費用。' },
    { term: '未収利息', category: '資産', description: '当期の利息のうち、来期に受け取り予定の利息。' },
    { term: '未収手数料', category: '資産', description: '当期の手数料のうち、来期に受け取り予定の手数料。' },
    { term: '未収家賃', category: '資産', description: '当期の家賃のうち、来期に受け取り予定の家賃。' },
    { term: '未収地代', category: '資産', description: '当期の地代のうち、来期に受け取り予定の地代。' },
    { term: '未収収益', category: '資産', description: '当期の収益のうち、来期に受け取り予定の収益。' },
    { term: '建物', category: '資産', description: '事務所や倉庫など、固定資産の一つ。' },
    { term: '土地', category: '資産', description: '企業が所有する土地。' },
    { term: '車両運搬具', category: '資産', description: '企業が所有する車両や運搬用具。' },
    { term: '定期預金', category: '資産', description: '預け入れ期間が定められた銀行預金。' },
    { term: '商品', category: '資産', description: '販売するために所有する商品。' },
    { term: '手形貸付金', category: '資産', description: '手形で貸し付けたお金。' },
    { term: '従業員貸付金', category: '資産', description: '従業員に貸し付けたお金。' },
    { term: '役員貸付金', category: '資産', description: '役員に貸し付けたお金。' },

    // 負債
    { term: '未払金', category: '負債', description: '商品以外の物やサービスを後払いで取得した時に、後で代金を支払う義務。' },
    { term: '仮受消費税', category: '負債', description: '商品の売却時に受け取った消費税。後に消費税を納付する義務。' },
    { term: '未払消費税', category: '負債', description: '納付期限が来ていない消費税。' },
        { term: '未払法人税等', category: '負債', description: '納付期限が来ていない法人税等。' },
    { term: '未払配当金', category: '負債', description: '株主に対して後日支払う予定の配当金。' },
    { term: '電子記録債務', category: '負債', description: '商品を掛けで購入した時に、その取引の内容を電子化したもの。' },
    { term: '役員借入金', category: '負債', description: '役員からの借入金。' },
    { term: '当座借越', category: '負債', description: '当座預金の残高を超えて引き出した時に発生する借入金。' },
    { term: '仮受金', category: '負債', description: '一時的に預かるお金。' },
    { term: '未払利息', category: '負債', description: '期末時点で支払期限が到来していない利息。' },
    { term: '未払給料', category: '負債', description: '従業員に対して支払うべき給料が未払いの状態。' },
    { term: '未払家賃', category: '負債', description: '期末時点で支払期限が到来していない家賃。' },
    { term: '未払地代', category: '負債', description: '期末時点で支払期限が到来していない地代。' },
    { term: '未払費用', category: '負債', description: '期末時点で支払期限が到来していない費用。' },
    { term: '預り金', category: '負債', description: '他人から一時的に預かっているお金。' },
    { term: '手形借入金', category: '負債', description: '手形で借り入れたお金。' },
    { term: '社会保険料預り金', category: '負債', description: '従業員から預かった社会保険料。' },
    { term: '所得税預り金', category: '負債', description: '従業員から預かった所得税。' },
    { term: '未払水道光熱費', category: '負債', description: '期末時点で支払期限が到来していない水道光熱費。' },

    // 資本
    { term: '資本金', category: '資本', description: '株主が会社へ提供した資金。会社が設立時に所有しているお金。' },
    { term: '利益準備金', category: '資本', description: '企業が稼いだ利益のうち、法律で積み立てることが義務付けられている利益。' },
    { term: '繰越利益剰余金', category: '資本', description: '企業が稼いだ利益のうち、来期に持ち越す利益。' },

    // 収益
    { term: '売上', category: '収益', description: '商品やサービスを売った時に得られる収入。' },
    { term: '受取家賃', category: '収益', description: '貸しビルや貸し店舗などの賃貸収入。' },
    { term: '受取地代', category: '収益', description: '土地の賃貸収入。' },
    { term: '受取手数料', category: '収益', description: '斡旋や仲介などで、手数料として得た収益。' },
    { term: '受取利息', category: '収益', description: 'お金の貸し付けや、銀行に預けることで利息として発生する収益。' },
    { term: '雑益', category: '収益', description: '他のどの勘定科目にも分類されず、さほど重要ではない収益。' },
    { term: '固定資産売却益', category: '収益', description: '土地や建物など、固定資産を売却した際に、その固定資産の価値よりも売却代金が多いことで得る利益。' },
    { term: '商品販売益', category: '収益', description: '商品を販売した際、売価と取得原価の差額として得る収益。' },
    { term: '貸倒引当金戻入', category: '収益', description: '前期で使用しなかった貸倒引当金を取り崩すことで得る収益。' },
    { term: '償却債権取立益', category: '収益', description: '前期以前に貸し倒れ処理を行ったお金が返ってくることで得る収益。' },

    // 費用
    { term: '仕入', category: '費用', description: '自社で販売する用の商品を購入するための費用。' },
    { term: '給料', category: '費用', description: '従業員に労働の対価として支払う費用。' },
    { term: '旅費交通費', category: '費用', description: '出張や交通にかかる費用。' },
    { term: '貸倒引当金繰入', category: '費用', description: '貸倒損失に備えて計上する引当金。' },
    { term: '減価償却費', category: '費用', description: '固定資産の価値を使用期間にわたって配分する費用。' },
    { term: '消耗品費', category: '費用', description: '文房具や事務用品などの、業務上使用する消耗品に対する費用。' },
    { term: '法人税、住民税及び事業税', category: '費用', description: '企業が支払う法人税、住民税、事業税。' },
    { term: '発送費', category: '費用', description: '商品や資料の発送にかかる費用。' },
    { term: '法定福利費', category: '費用', description: '社会保険料のうち、企業が負担する費用。' },
    { term: '広告宣伝費', category: '費用', description: '企業や商品の広告、宣伝にかかる費用。' },
    { term: '支払手数料', category: '費用', description: '銀行での振り込みなどで、手数料が発生する場合に支払う費用。' },
    { term: '支払利息', category: '費用', description: '借入金に対して支払う利息。' },
    { term: '貸倒損失', category: '費用', description: '貸し倒れた際に、損失として発生する費用。' },
    { term: '通信費', category: '費用', description: '電話や切手など、通信にかかる費用。' },
    { term: '水道光熱費', category: '費用', description: '水道、電気、ガスにかかる費用。' },
    { term: '支払家賃', category: '費用', description: '借りている建物や土地の賃貸料。' },
    { term: '支払地代', category: '費用', description: '借りている土地の賃貸料。' },
    { term: '保険料', category: '費用', description: '生命保険や損害保険などの、保険の契約に対して支払う費用。' },
    { term: '租税公課', category: '費用', description: '印紙税や固定資産税などの、租税や公的な負担金としてかかる費用。' },
    { term: '修繕費', category: '費用', description: '建物などの修繕にかかる費用。' },
    { term: '雑費', category: '費用', description: 'クリーニング代など、金額が少なく、他の勘定科目に当てはまらない諸費用。' },
        { term: '雑損', category: '費用', description: '他のどの勘定科目にも分類されず、さほど重要ではない費用。' },
    { term: '固定資産売却損', category: '費用', description: '土地や建物など、固定資産を売却した際に、その固定資産の価値よりも売却代金が少ないことで発生する損失。' },
    { term: '保管費', category: '費用', description: '商品や製品の保管にかかる費用。' },
    { term: '諸会費', category: '費用', description: '所属する団体などに、会費として支払う費用。' },
    { term: '売上原価', category: '費用', description: '売却した商品の、元々の仕入れにかかる費用。' }
];

const selectedQuestions = [];
const incorrectAnswers = [];

function getRandomQuestions(num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function generateQuestions() {
    const numQuestions = 10;
    selectedQuestions.length = 0;
    selectedQuestions.push(...getRandomQuestions(numQuestions));

    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<strong>問${index + 1}:</strong> ${question.term}`;
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        ['資産', '負債', '資本', '収益', '費用'].forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.onclick = () => checkAnswer(index, category, button);
            optionsDiv.appendChild(button);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });

    generateSummary();
}

function checkAnswer(questionIndex, category, button) {
    const question = selectedQuestions[questionIndex];
    const resultElement = document.createElement('div');
    const descriptionElement = document.createElement('div');
    resultElement.classList.add('result');
    descriptionElement.classList.add('description');

    if (category === question.category) {
        resultElement.textContent = '正解！';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = '不正解！';
        resultElement.style.color = 'red';
        incorrectAnswers.push(question);
    }

    descriptionElement.textContent = question.description;

    const optionsButtons = button.parentElement.querySelectorAll('button');
    optionsButtons.forEach(btn => {
        if (btn.textContent === question.category) {
            btn.classList.add('highlight');
        }
        btn.disabled = true;
    });

    button.parentElement.appendChild(resultElement);
    button.parentElement.appendChild(descriptionElement);
}

function generateSummary() {
    const summaryContainer = document.getElementById('summary');
    summaryContainer.innerHTML = '';

    const summaryButton = document.createElement('button');
    summaryButton.textContent = '不正解の多い問題を解く';
    summaryButton.onclick = () => generateIncorrectQuestions();
    summaryContainer.appendChild(summaryButton);
}

function generateIncorrectQuestions() {
    const numQuestions = 5;
    const selectedIncorrectQuestions = getRandomQuestions(numQuestions);
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    selectedIncorrectQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<strong>問${index + 1}:</strong> ${question.term}`;
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        ['資産', '負債', '資本', '収益', '費用'].forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.onclick = () => checkAnswer(index, category, button);
            optionsDiv.appendChild(button);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

window.onload = generateQuestions;


