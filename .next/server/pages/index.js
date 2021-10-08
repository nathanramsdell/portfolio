(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
  return /*#__PURE__*/_jsxs("div", {
    class: "flex  mx-auto",
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex",
      children: /*#__PURE__*/_jsx("h1", {
        children: "NaRa"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "flex justify-end flex-grow",
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex space-x-6",
        children: [/*#__PURE__*/_jsx("h1", {
          children: "Home"
        }), /*#__PURE__*/_jsx("h1", {
          children: "About"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Skills"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Services"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Projects"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Testimonials"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Blog"
        }), /*#__PURE__*/_jsx("h1", {
          children: "Contact"
        })]
      })
    })]
  });
}

/* harmony default export */ var components_Header = ((/* unused pure expression or super */ null && (Header)));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Hero.js




function Hero() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    class: "relative",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid lg:grid-cols-2 ",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "place-self-center relative",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: " text-2xl sm:text-5xl font-bold",
            children: ["I'm Nathan, a ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-purple-500",
              children: "Front-End"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Web Developer"]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-regular mt-3",
            children: "My mission is to help your business grow by creating intuitive and interactive web applications."
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "py-2 px-6 bg-purple-500 text-white mt-4 rounded-full hover:bg-purple-600",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#services",
              children: "Learn More"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "large-bubble",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png",
            alt: "Large Bubble",
            width: 220,
            height: 220
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "medium-bubble",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png",
            alt: "Large Bubble",
            width: 86,
            height: 86
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "small-bubble",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png",
            alt: "Large Bubble",
            width: 48,
            height: 48
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "relative text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
            className: "iframe-profile",
            src: "https://embed.lottiefiles.com/animation/73810"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "big-dots",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/large-hero-dots.png",
            alt: "dot background",
            width: 132,
            height: 116
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "small-dots",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/small-hero-dots.png",
            alt: "dot background",
            width: 84,
            height: 68
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var components_Hero = (Hero);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(583);
;// CONCATENATED MODULE: ./components/AboutMe.js





function AboutMe() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: " mx-auto about-me",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid md:grid-cols-2 pb-12 ",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "place-self-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-bold text-xl mb-3",
          children: "Hi, I'm a Web Developer from Minneapolis, MN"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm",
          children: "Since I began working in dev, I have also grown to appreciate so much more about the field. There is a really great amount of variety in what I can do every day, from managing support tickets to creating complete web applications. I love how I get the opportunity to meet new people often. Most of all, I love being a part of companies\u2019 success. Through web development, I am so grateful that I am able to work with others on what they are passionate about, and do everything I can to help them be successful in that. "
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "text-center mt-5 md:mt-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              className: "iframe-about",
              src: "https://embed.lottiefiles.com/animation/72178"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-lg font-bold",
              children: "Nathan Ramsdell"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-center text-gray-400 mt-4 ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://github.com/nathanramsdell",
              target: "_blank",
              className: "mx-1 hover:text-gray-300",
              children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaGithub */.hJX, {
                className: "text-[2.5rem]"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.linkedin.com/in/nathan-ramsdell/",
              target: "_blank",
              className: "mx-1 hover:text-gray-300",
              children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaLinkedin */.ltd, {
                className: "text-[2.5rem]"
              })
            })]
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var components_AboutMe = (AboutMe);
;// CONCATENATED MODULE: ./components/Skills.js



function Skills() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "accordian-bx",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "tab w-full overflow-hidden ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "absolute opacity-0",
        id: "tab-single-one",
        type: "radio",
        name: "tabs2"
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "block p-5 leading-normal cursor-pointer",
        htmlfor: "tab-single-one",
        children: "What Languages Do I Like to Use?"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "p-5",
          children: "I work with HTML 5, CSS 3, and ES6 on a daily basis. I also have a strong base working with React and Next.JS"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "tab w-full overflow-hidden ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "absolute opacity-0",
        id: "tab-single-two",
        type: "radio",
        name: "tabs2"
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "block p-5 leading-normal cursor-pointer",
        htmlfor: "tab-single-two",
        children: "What Experience Do I Have?"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "p-5",
          children: "I have been working as a Front-End Web Developer for over a year. I spend most of my workday working on building out new sites and managing support tickets for current live sites. Throughout the years, I have learned how to properly manage and create DNS records for hosting sites, work with WordPress as a CMS, and collaborate with others to finish projects in a effecient and effective way."
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "tab w-full overflow-hidden ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "absolute opacity-0",
        id: "tab-single-three",
        type: "radio",
        name: "tabs2"
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "block p-5 leading-normal cursor-pointer",
        htmlfor: "tab-single-three",
        children: "My Ideal Work Enviroment Would Be..."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "p-5",
          children: "\"My ideal work environment is one where I'm able to work as part of a team and that allows everyone's talents to grow. I've found that this type of environment is most conducive to my productivity, especially in a position that requires me to constantly improve my development skills. It allows me to remain passionate about my job and helps me express my creativity to the best of my ability."
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "tab w-full overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "absolute opacity-0",
        id: "tab-single-four",
        type: "radio",
        name: "tabs2"
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "block p-5 leading-normal cursor-pointer",
        htmlfor: "tab-single-four",
        children: "What Makes Me Stand Out?"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "p-5",
          children: "I am always trying to improve my skills. I find the field that I am working in is incredibly rewarding and I am always researching new ways to improve my abilities. Having real world experience has allowed me to grow and flourish within this field."
        })
      })]
    })]
  });
}

var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;

for (x = 0; x < myRadios.length; x++) {
  myRadios[x].onclick = function () {
    if (setCheck != this) {
      setCheck = this;
    } else {
      this.checked = false;
      setCheck = null;
    }
  };
}

/* harmony default export */ var components_Skills = (Skills);
;// CONCATENATED MODULE: ./components/Specialization.js



function Specialization() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: " mx-auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-3xl pb-5",
        children: "Testimonials"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto mt-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "testimonial-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "quote",
          children: "\"Coming Soon! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.\""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-details",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "small-avatar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "avatar-details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-md",
              children: "John Doe"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-sm",
              children: "Company"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "testimonial-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "quote",
          children: "\"Coming Soon! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.\""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-details",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "small-avatar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "avatar-details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-md",
              children: "John Doe"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-sm",
              children: "Company"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "testimonial-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "quote",
          children: "\"Coming Soon! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.\""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-details",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "small-avatar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "avatar-details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-md",
              children: "John Doe"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-sm",
              children: "Company"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "testimonial-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "quote",
          children: "\"Coming Soon! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.\""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-details",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "small-avatar"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "avatar-details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-md",
              children: "John Doe"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-sm",
              children: "Company"
            })]
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Specialization = (Specialization);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/react-icons/go/index.esm.js
var go_index_esm = __webpack_require__(653);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(854);
;// CONCATENATED MODULE: ./components/Services.js







function Services() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: " mx-auto",
    id: "services",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-3xl pb-5",
        children: "What I Do Well"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid sm:grid-cols-2 md:grid-cols-4 gap-6  mx-auto mt-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 py-7 service-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiPenTool */.nrB, {
          className: "bg-pink-100 rounded-full h-[64px] w-[64px] p-[16px] text-pink-500 text-[32px] "
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-md font-bold mb-3",
          children: "Collaboration"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm",
          children: "I am experienced in working with both dedicated design teams and individuals to bring ideas to life!"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 py-7 service-card",
        class: "service-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx(go_index_esm/* GoFileMedia */.HY9, {
          className: "text-purple-500 bg-purple-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-md font-bold mb-3",
          children: "Responsive Design"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm",
          children: "I am a mobile first web developer. I enjoy working with Bootstrap or Tailwind to expedite the creation process."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 py-7 service-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiLightBulb */.sJz, {
          className: "text-indigo-500 bg-indigo-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: " text-md font-bold mb-3",
          children: "Performance"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm",
          children: "I have a strong understanding of Google Core Metrics and working with web best practices to improve speed scores on professinal projects."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 py-7 service-card",
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaWrench */.LDL, {
          className: "text-blue-500 bg-blue-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: " text-md font-bold mb-3",
          children: "Organization"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm",
          children: "My coding style prioritizes writing clean and easy-to-read code."
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Services = (Services);
;// CONCATENATED MODULE: ./components/Tiles.js




function Tiles() {
  // function changeBackground(e) {
  //     e.target.style.opacity = '1';
  //   }
  //   function originalOverlay(e) {
  //     e.target.style.opacity = '0';
  //   }
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-3xl pb-5",
        children: "Recent Work"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid lg:grid-cols-2  lg:grid-rows-2 gap-5 mx-auto text-white  mt-8  ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "project-wrapper shadow-md",
          id: "project-wrapper",
          class: "project-wrapper yes",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/got-flow.png",
            alt: "lollipop",
            className: "recent-work-img"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "current font-bold text-xl text-purple-300 mb-3",
            children: "Professinal Site Builds"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "current",
            children: "I have created and launched dozens of websites for companies across the United States and Canada."
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "overlay"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "project-wrapper shadow-md",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/portfolio-about.png",
            alt: "lollipop",
            className: "recent-work-img"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "current font-bold text-xl text-purple-300 mb-3 ",
            children: "This Portfolio"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "current",
            children: "I created this portfolio using Next.JS and Tailwind CSS. The contact form is fully functional and was integrated with Sendgrid."
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "overlay"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "project-wrapper shadow-md",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/naterbook1.png",
            alt: "lollipop",
            className: "recent-work-img"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "current font-bold text-xl text-purple-300 mb-3",
            children: "NaterBook"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "current",
            children: "Naterbook was an web application built using Next.JS. This application allows users to login through Facebook authenication and post text and images to one another. All information was sent and pulled from Google Firebase. "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "overlay"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "project-wrapper shadow-md",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg",
            alt: "lollipop",
            className: "recent-work-img"
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "current font-bold text-xl text-purple-300 mb-3",
            children: "WordPress Plugins & Theme Development"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "current",
            children: "I have created countless plugin to be used on WordPress sites. Plugins ranged from a simple YouTube Subscriber count to a current weather widget for your specified location. "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "overlay"
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center mt-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/nathanramsdell/",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "py-2 px-6 border-purple-500 font-thin mt-4 rounded-full border-solid border-2  trasnition transition-colors hover:bg-purple-500 hover:text-white ",
          children: "See My Github"
        })
      })
    })]
  });
}

/* harmony default export */ var components_Tiles = (Tiles);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(434);
;// CONCATENATED MODULE: ./components/Contactform.js







function Contactform() {
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)("");
  const {
    0: submitted,
    1: setSubmitted
  } = (0,external_react_.useState)(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    console.log(data);
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data)
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "my-12",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "contact-form-container shadow-lg rounded-lg py-12",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "text-3xl font-bold p-5 text-white",
            children: ["Contact Me to ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-purple-500",
              children: "Learn More!"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col md:flex-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-[100%] md:w-6/12 p-5 mx-auto md:mx-0 ",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: handleSubmit,
              className: "flex flex-col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "py-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  id: "name",
                  type: "text",
                  placeholder: "Your Name",
                  value: name,
                  onChange: e => {
                    setName(e.target.value);
                  },
                  required: true,
                  className: "appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "py-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  id: "email",
                  type: "email",
                  value: email,
                  placeholder: "Your Email",
                  onChange: e => {
                    setEmail(e.target.value);
                  },
                  required: true,
                  className: "appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "py-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  id: "message",
                  type: "text",
                  value: message,
                  rows: "5",
                  placeholder: "Tell me why you're reaching out!",
                  onChange: e => {
                    setMessage(e.target.value);
                  },
                  className: "appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3",
                  required: true
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "appearance-none block bg-purple-500 hover:bg-purple-600 text-white rounded-full w-[200px] py-5 px-4 mb-3 text-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  type: "submit",
                  children: "Send Now"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col justify-center mx-0 md:mx-auto ",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center space-x-2 p-4 mb-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx(md_index_esm/* MdEmail */.ixJ, {
                className: "text-purple-500 h-6 w-6 flex"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "flex text-white text-xl",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:ramsdell.28@gmail.com",
                  children: "ramsdell.28@gmail.com"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center space-x-2 p-4 mb-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaPhoneAlt */.DNl, {
                className: "text-purple-500 h-5 w-5 flex"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "flex text-white text-xl",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "tel:+4144165700",
                  children: "414-416-5700"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center space-x-2 p-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaLocationArrow */.nkz, {
                className: "text-purple-500 h-5 w-5 flex"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "flex text-white text-xl",
                children: "Minneapolis, MN"
              })]
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ var components_Contactform = (Contactform);
;// CONCATENATED MODULE: ./pages/index.js











function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "custom-container ",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "NaRa"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center section-margin-bottom mt-[100px]",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Hero, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Services, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Tiles, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Specialization, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "about",
      className: "section-margin-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_AboutMe, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin-bottom",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Skills, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Contactform, {})]
  });
}

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,926], function() { return __webpack_exec__(860); });
module.exports = __webpack_exports__;

})();