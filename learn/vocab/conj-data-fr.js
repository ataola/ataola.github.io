/* 法语动词变位 */
window.CONJ_FR = {
  lang: "fr",
  label: "法语",
  persons: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"],
  tenses: [["pres", "现在时"], ["pc", "复合过去时"], ["imp", "未完成过去时"], ["fut", "简单将来时"]],
  verbs: [
    {
      inf: "parler",
      meaning: "说",
      group: "第一组",
      forms: {
        pres: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
        pc:   ["ai parlé", "as parlé", "a parlé", "avons parlé", "avez parlé", "ont parlé"],
        imp:  ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
        fut:  ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"]
      },
      note: "第一组规则动词，复合过去时用 avoir"
    },
    {
      inf: "manger",
      meaning: "吃",
      group: "第一组",
      forms: {
        pres: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"],
        pc:   ["ai mangé", "as mangé", "a mangé", "avons mangé", "avez mangé", "ont mangé"],
        imp:  ["mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"],
        fut:  ["mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"]
      },
      note: "nous 形式保留 e：mangeons，以保 g 音"
    },
    {
      inf: "habiter",
      meaning: "居住",
      group: "第一组",
      forms: {
        pres: ["habite", "habites", "habite", "habitons", "habitez", "habitent"],
        pc:   ["ai habité", "as habité", "a habité", "avons habité", "avez habité", "ont habité"],
        imp:  ["habitais", "habitais", "habitait", "habitions", "habitiez", "habitaient"],
        fut:  ["habiterai", "habiteras", "habitera", "habiterons", "habiterez", "habiteront"]
      },
      note: "第一组规则动词，词干 habiter 加词尾"
    },
    {
      inf: "étudier",
      meaning: "学习",
      group: "第一组",
      forms: {
        pres: ["étudie", "étudies", "étudie", "étudions", "étudiez", "étudient"],
        pc:   ["ai étudié", "as étudié", "a étudié", "avons étudié", "avez étudié", "ont étudié"],
        imp:  ["étudiais", "étudiais", "étudiait", "étudiions", "étudiiez", "étudiaient"],
        fut:  ["étudierai", "étudieras", "étudiera", "étudierons", "étudierez", "étudieront"]
      },
      note: "nous/vous 未完成时双写 i：étudiions"
    },
    {
      inf: "travailler",
      meaning: "工作",
      group: "第一组",
      forms: {
        pres: ["travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"],
        pc:   ["ai travaillé", "as travaillé", "a travaillé", "avons travaillé", "avez travaillé", "ont travaillé"],
        imp:  ["travaillais", "travaillais", "travaillait", "travaillions", "travailliez", "travaillaient"],
        fut:  ["travaillerai", "travailleras", "travaillera", "travaillerons", "travaillerez", "travailleront"]
      },
      note: "第一组规则动词，注意双写 l"
    },
    {
      inf: "être",
      meaning: "是（存在）",
      group: "第三组",
      forms: {
        pres: ["suis", "es", "est", "sommes", "êtes", "sont"],
        pc:   ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
        imp:  ["étais", "étais", "était", "étions", "étiez", "étaient"],
        fut:  ["serai", "seras", "sera", "serons", "serez", "seront"]
      },
      note: "最不规则动词，将来时词干 ser-"
    },
    {
      inf: "avoir",
      meaning: "有",
      group: "第三组",
      forms: {
        pres: ["ai", "as", "a", "avons", "avez", "ont"],
        pc:   ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
        imp:  ["avais", "avais", "avait", "avions", "aviez", "avaient"],
        fut:  ["aurai", "auras", "aura", "aurons", "aurez", "auront"]
      },
      note: "复合过去时用 avoir 自身：ai eu"
    },
    {
      inf: "aller",
      meaning: "去",
      group: "第三组",
      forms: {
        pres: ["vais", "vas", "va", "allons", "allez", "vont"],
        pc:   ["suis allé", "es allé", "est allé", "sommes allés", "êtes allés", "sont allés"],
        imp:  ["allais", "allais", "allait", "allions", "alliez", "allaient"],
        fut:  ["irai", "iras", "ira", "irons", "irez", "iront"]
      },
      note: "复合过去时用 être，过去分词需与主语配合"
    },
    {
      inf: "faire",
      meaning: "做",
      group: "第三组",
      forms: {
        pres: ["fais", "fais", "fait", "faisons", "faites", "font"],
        pc:   ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],
        imp:  ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
        fut:  ["ferai", "feras", "fera", "ferons", "ferez", "feront"]
      },
      note: "vous 形式为 faites，将来时词干 fer-"
    },
    {
      inf: "pouvoir",
      meaning: "能够",
      group: "第三组",
      forms: {
        pres: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
        pc:   ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
        imp:  ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
        fut:  ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"]
      },
      note: "将来时双写 r：pourrai，过去分词 pu"
    },
    {
      inf: "vouloir",
      meaning: "想要",
      group: "第三组",
      forms: {
        pres: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
        pc:   ["ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],
        imp:  ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
        fut:  ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"]
      },
      note: "将来时词干 voudr-，注意与 pouvoir 区分"
    },
    {
      inf: "savoir",
      meaning: "知道",
      group: "第三组",
      forms: {
        pres: ["sais", "sais", "sait", "savons", "savez", "savent"],
        pc:   ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
        imp:  ["savais", "savais", "savait", "savions", "saviez", "savaient"],
        fut:  ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"]
      },
      note: "将来时词干 saur-，过去分词 su"
    },
    {
      inf: "venir",
      meaning: "来",
      group: "第三组",
      forms: {
        pres: ["viens", "viens", "vient", "venons", "venez", "viennent"],
        pc:   ["suis venu", "es venu", "est venu", "sommes venus", "êtes venus", "sont venus"],
        imp:  ["venais", "venais", "venait", "venions", "veniez", "venaient"],
        fut:  ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"]
      },
      note: "用 être 作助动词，过去分词随主语变化"
    },
    {
      inf: "dire",
      meaning: "说（告诉）",
      group: "第三组",
      forms: {
        pres: ["dis", "dis", "dit", "disons", "dites", "disent"],
        pc:   ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
        imp:  ["disais", "disais", "disait", "disions", "disiez", "disaient"],
        fut:  ["dirai", "diras", "dira", "dirons", "direz", "diront"]
      },
      note: "vous 形式特殊：dites，过去分词 dit"
    },
    {
      inf: "prendre",
      meaning: "拿取",
      group: "第三组",
      forms: {
        pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
        pc:   ["ai pris", "as pris", "a pris", "avons pris", "avez pris", "ont pris"],
        imp:  ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
        fut:  ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"]
      },
      note: "复数词干 pren-，过去分词不规则的 pris"
    },
    {
      inf: "mettre",
      meaning: "放置",
      group: "第三组",
      forms: {
        pres: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
        pc:   ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
        imp:  ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
        fut:  ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"]
      },
      note: "单数只一个 t，复数双写 t，分词 mis"
    },
    {
      inf: "voir",
      meaning: "看见",
      group: "第三组",
      forms: {
        pres: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
        pc:   ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
        imp:  ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
        fut:  ["verrai", "verras", "verra", "verrons", "verrez", "verront"]
      },
      note: "nous/vous 用 voy-，将来时词干 verr-"
    },
    {
      inf: "connaître",
      meaning: "认识",
      group: "第三组",
      forms: {
        pres: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
        pc:   ["ai connu", "as connu", "a connu", "avons connu", "avez connu", "ont connu"],
        imp:  ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
        fut:  ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"]
      },
      note: "第三人称单数带 î，复数词干 connaiss-"
    },
    {
      inf: "dormir",
      meaning: "睡觉",
      group: "第三组",
      forms: {
        pres: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
        pc:   ["ai dormi", "as dormi", "a dormi", "avons dormi", "avez dormi", "ont dormi"],
        imp:  ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
        fut:  ["dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"]
      },
      note: "单数词干 dorm- 去词尾，分词 dormi"
    },
    {
      inf: "sortir",
      meaning: "出去",
      group: "第三组",
      forms: {
        pres: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
        pc:   ["suis sorti", "es sorti", "est sorti", "sommes sortis", "êtes sortis", "sont sortis"],
        imp:  ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
        fut:  ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"]
      },
      note: "用 être 作助动词，过去分词需配合"
    }
  ]
};
