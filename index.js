// index.js

const Trumplang = {
    BelieveMe: (output) => console.log(`${output} believe me`),

    Tremendous: (condition, tremendousBlock, disasterBlock) => {
        if (condition) {
            tremendousBlock();
        } else if (disasterBlock) {
            disasterBlock();
        }
    },

    HuuugeLoop: (times, action) => {
        for (let i = 0; i < times; i++) {
            action();
        }
    },

    FakeNumber: (value) => value * 1.1, // Inflates numbers by 10%

    Covfefe: undefined,

    Bigly: (value) => (value ? "TrueBigly" : "FakeNews"),

    Try: (tryBlock, catchBlock) => {
        try {
            tryBlock();
        } catch (error) {
            catchBlock(error);
        }
    },

    BuildTheWall: (data) => data.filter((item) => item.allowed),

    Tweet: (message) => console.log(`[TWEET]: ${message}`),

    AlternativeFacts: (data) => `${JSON.stringify(data)} (but better!)`,

    InstallDependency: (dependency) => console.log(`Installing ${dependency} (only the greatest)`),
};

module.exports = Trumplang;
