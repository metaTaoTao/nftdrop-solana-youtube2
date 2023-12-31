"use strict";
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/logo.png",
            width: 60,
            height: 60,
            layout: "fixed"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(963);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__]);
_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const styles = {
    wrapper: "flex items-center space-x-10",
    container: "flex flex-1 justify-between",
    navBar: "flex items-center space-x-2",
    navItem: "cursor-pointer hover:text-[#1D1D1D] hover:bg-[#F2F2F2] transition duration-300 rounded-md px-4 py-2",
    menuBox: "relative inline-block text-left",
    menuButton: "flex items-center rounded-full  text-white hover:text-gray-200 focus:outline-none",
    menuIcon: "h-5 w-5",
    menuItems: "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    menuItemsContainer: "py-1",
    menuItem: "block w-full px-4 py-2 text-left text-sm",
    buttonActive: "bg-gray-100 text-gray-900",
    buttonInactive: "text-gray-700"
};
const transitions = {
    menuEnter: "transition ease-out duration-100",
    menuEnterFrom: "transform opacity-0 scale-95",
    menuEnterTo: "transform opacity-100 scale-100",
    menuLeave: "transition ease-in duration-75",
    menuLeaveFrom: "transform opacity-100 scale-100",
    menuLeaveTo: "transform opacity-0 scale-95"
};
const Header = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: styles.wrapper,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styles.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: styles.navBar,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: styles.navItem,
                                children: "Products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: styles.navItem,
                                children: "Marketplace"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: styles.navItem,
                                children: "Gallery"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const styles = {
    wrapper: "flex w-full items-center justify-center pt-16 lg:pt-20",
    container: "space-y-10",
    heroTitle: "xl:pr-40 text-6xl font-bold",
    heroParagraph: "xl:pr-40",
    heroCta: "flex items-center space-x-10",
    mintButton: "rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]"
};
const Hero = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: styles.wrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: styles.container,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: styles.heroTitle,
                    children: "Solana Millionaire Bear"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: styles.heroParagraph,
                    children: "SMB Gen2 is a collection of 5000 unique 24x24 pixels randomly generated Monkeys stored on the Solana blockchain. With their accessibility-oriented design, the monkeys' goal is to invade the blockchain and spread their community. The monkeys feature owner-exclusive advantages such as NFT ownership, as well as a community wallet useable by holders with a future on-chain voting system. The Solana Monkeys' metadata is stored on Arweave, a permanent decentralized data storage. Each monkey is generated from over 99 possible traits spread over 6 layers, with some monkeys being rarer than others. Reject humanity, return to monke."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: styles.heroCta
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NFTDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./static/data.js
const data = {
    "program": {
        "candyMachine": "t7ndHZTV6NqsReMB9BvLMj7GwGawxj3SdD114HeGRMy",
        "candyGuard": "E1hDTD28iVjpYUcvgd1DByavfdxZFJLYectVArjZHQ6N",
        "candyMachineCreator": "9uMrfW4vB6evb5FrudHyZYvWxuwaXHvhYc63582jDhuX",
        "collectionMint": "CWTa4E8JoQmSVJZMs9Q3PC1eaz7WAzu2rntgSeLdiCTV"
    },
    "items": [
        {
            "name": "SMB #0000",
            "image_hash": '�\x1b,��ra�w�l8�\x10~(�\x1c�w]vy�K`~"7',
            "image_link": "https://arweave.net/AEFc1GDl0eo0OHq_h4QBpbl_M-Ne2aGdO0Qxja1CqXg",
            "metadata_hash": "���_�k\x06�\x01\x15�\x07!�\x0f�\x03���\x12[\x10M\x1b\nu�\\\x18��",
            "metadata_link": "https://arweave.net/8AU5sf9bYErjSGh-LxgrMC04XdsiUkNS78w7HG2gLIY",
            "onChain": true
        },
        {
            "name": "SMB #0001",
            "image_hash": 'e��>��+����U\x07�Pc\x0en"��֠��O\x1a�q�\x12',
            "image_link": "https://arweave.net/yv2rezJiO7EHH-naWkSMUlbv2pQQWMpXLZvfGM1oGWA",
            "metadata_hash": "�`\x1d\x04�HP\v�\x10���3��E��#�S� ���7�",
            "metadata_link": "https://arweave.net/3n89VmwoxTclzSrIpJf7tuvUOeiaDBrPibQptg9_u9Q",
            "onChain": true
        },
        {
            "name": "SMB #0002",
            "image_hash": "���Q`��\x02��\x7f�/\uDA05\uDF3C\x11���\x16�R�\x7f�\x1a�e�0",
            "image_link": "https://arweave.net/EHk66u_X2c5i7TxdbabwEbZOSM4kDAnVZn5GbmbNT2Y",
            "metadata_hash": "�q����,E��\b\n\x1b	�\x1f5�T�mT>�[1�<8ZYS",
            "metadata_link": "https://arweave.net/uVzDysig_uR0T6GMBuqMh07ZUnF0kX1YC8OQsWUT_uo",
            "onChain": true
        }
    ]
};

;// CONCATENATED MODULE: ./components/NFTDisplay/index.js


// Convert your cache.json into data to display your nfts

const styles = {
    wrapper: "bg-animate flex-1 rounded-3xl flex lg:flex-col items-center relative absolute inset-0 flex snap-x items-center gap-4 overflow-x-scroll h-81 px-[1rem] py-[1rem]",
    imageContainer: "relative h-[200px] w-[200px] flex-shrink-0 snap-center lg:h-[400px] lg:w-[400px]",
    nftImage: `rounded-[1rem] object-cover`
};
const NFTDisplay = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: styles.wrapper,
        children: data.items.map((nft, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: styles.nftImage,
                    src: nft.image_link,
                    layout: "fill",
                    alt: "nft"
                })
            }, index))
    });
};
/* harmony default export */ const components_NFTDisplay = (NFTDisplay);


/***/ }),

/***/ 993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "WH": () => (/* reexport safe */ _NFTDisplay__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(665);
/* harmony import */ var _NFTDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(201);
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(378);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(247);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const styles = {
    wrapper: "flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200",
    container: "flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0 ",
    buttonContainer: "flex flex-col lg:flex-row flex-1 pt-5  space-y-10",
    infoSection: "lg:w-2/3 px-10",
    mobileDisplaySection: "h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4",
    desktopDisplaySection: "hidden lg:flex flex-1 lg:w-1/3",
    mintButton: "rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]"
};
function Main() {
    const [metaplex, setMetaplex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [candyState, setCandyState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [candyStateError, setCandyStatError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [candyStateLoading, setCandyStateLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [txError, setTxError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [txLoading, setTxLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useAnchorWallet)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setMetaplex(_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__.Metaplex.make(connection).use(wallet ? (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__.walletAdapterIdentity)(wallet) : (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__.guestIdentity)()));
    }, [
        connection,
        wallet
    ]);
    // Set up my state and update it every few seconds 
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!metaplex) return;
        const updateState = async ()=>{
            try {
                const state = await metaplex.candyMachines().findByAddress({
                    address: _utils__WEBPACK_IMPORTED_MODULE_8__/* .CANDY_MACHINE_ID */ .w
                });
                setCandyState(state);
                setNfts(state.items);
                setCandyStatError(null);
            } catch (e) {
                console.log(e);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Error has occured!");
            } finally{
                setCandyStateLoading(false);
            //toast.success("Minted!")
            }
        };
        updateState();
        // Refresh state every 30 seconds 
        const intervalId = setInterval(()=>updateState(), 30000);
        return ()=>clearInterval(intervalId);
    }, [
        metaplex
    ]);
    const mint = async ()=>{
        if (!metaplex) return;
        setTxLoading(true);
        setTxError(null);
        console.log(candyState.authorityAddress, "this is my candystate");
        console.log(wallet, "wallet");
        try {
            //console.log(candyState.address, 'this is my candystate')
            const mintResult = await metaplex.candyMachines().mint({
                candyMachine: {
                    address: candyState.address,
                    collectionMintAddress: candyState.collectionMintAddress,
                    candyGuard: candyState.candyGuard
                },
                collectionUpdateAuthority: candyState.authorityAddress,
                group: null
            });
            console.log({
                mintResult
            });
        } catch (e) {
            console.log(e);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Mint failed");
            setTxError(e.message);
        } finally{
            setTxLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Minted NFT!");
        }
    };
    const soldOut = candyState?.itemsRemaining.eqn(0);
    const solAmount = candyState?.candyGuard?.guards?.solPayment ? candyState.candyGuard.guards.solPayment.lamports.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.LAMPORTS_PER_SOL : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styles.wrapper,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                position: "top-center",
                reverseOrder: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Home | Solana Millionaire Bear NFT"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styles.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: styles.infoSection,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: styles.mobileDisplaySection,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .NFTDisplay */ .WH, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Hero */ .VM, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: candyStateLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "Loading"
                                }) : candyStateError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: candyStateError
                                }) : candyState && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "Total Items: ",
                                                candyState.itemsAvailable.toString(),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "Minted Items: ",
                                                candyState.itemsMinted.toString(),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "Remaining Items: ",
                                                candyState.itemsRemaining.toString(),
                                                " "
                                            ]
                                        }),
                                        solAmount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "Cost: ",
                                                solAmount,
                                                " SOL "
                                            ]
                                        }),
                                        txError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                txError,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: styles.buttonContainer,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: styles.mintButton,
                                                onClick: mint,
                                                disabled: !wallet || txLoading || soldOut,
                                                children: soldOut ? "SOLD OUT" : txLoading ? "LOADING" : "MINT"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: styles.desktopDisplaySection,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .NFTDisplay */ .WH, {})
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ CANDY_MACHINE_ID),
  "_": () => (/* reexport */ RPC_ENDPOINT)
});

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(831);
;// CONCATENATED MODULE: ./utils/constants.js

const RPC_ENDPOINT = "https://nameless-red-daylight.solana-devnet.quiknode.pro/1c714ffb34d1a44824c3ccbd9f60b5161dc839f5/";
// Change this with your candy machine id
const CANDY_MACHINE_ID = new web3_js_.PublicKey("t7ndHZTV6NqsReMB9BvLMj7GwGawxj3SdD114HeGRMy");

;// CONCATENATED MODULE: ./utils/index.js



/***/ })

};
;