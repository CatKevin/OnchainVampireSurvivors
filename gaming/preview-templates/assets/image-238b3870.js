const A="data:image/webp;base64,UklGRmAHAABXRUJQVlA4IFQHAACQIwCdASqAAIAAPm0ylkekIyIhJZdLAIANiWYA0m4U4J6BfqvxN9mOv/4vx792UZvteyZ+rfzBf1j6bvmF/aj9mfd29K/+K9QD++f5zrLPQA8tj9y/hS/cz0s4u8aaXwg92Ssqk7secseKdLGjdPiN/zxcjv9sMKRLVS2R/hP/Lwdn+woFBpfPuVl55KLUICXIsp39VNPOy9z9+aA2uQtgfqkKNxyav4RLadzbaAKqWHGlVeDW7JlznJy0Ql6Zb8PaR659K4prYmwFrD2U2MGlIWepPsWDVllJbtt/O1nsHzBc0e6qvkKxW75WekXQtE7mS1t+473qg7BqGOMOvvkiGDoF2bUUJ4zyF9AZiPK9ysm6jKjnJaqaO/hR77WW603jx5WI2AD+/Z2i+oWSTkKAfipddDrc94AgACA8NOVF6ZU3VE0PSQclx+90fSRvSOm0vmoFIdUcPSf/Kp0F8qANm9Y37CYwc+kAui4eIKTZjtkCMHH9c+LSAjoqzQfekmnoeQhvgCFJzsjsOpss+j5gUuML2zNv5uWVRjaaP3C6QRyXDAu4PaAUSLqWBXqx31u4qX8Su0OaE8W2d3SIJ4jrkoBYVxr4jVTYLqgnIFpTHiiBx1zZt+t4buKCYwPo8zaVj/HzAAnVc+dhKrs92U9xjNEpYUtU3mzr3edAFPRYeeksyRVYERRyxGex3h4OXvxvtfpYEUXGmu8JlhyK/nk2pgYgsFz6P+5rXNpRaTGA651GaoLzUrEJHoGTdxndZRNGOLyA+FryGs+vxRRR6hd5bfvZrJjFIDuX68MO5pZ6hjshjMT4VqZhTrK2xcf/Cu4YGkkque6irm1gUJzVgLCiDw/Rw9hRJ1ZFQd83zcrhP69or1EDJEx4LcPu4jaq6W7/IKNNbHh24FGpD7Ncrf6BLHJs/unuW9cgiqqvNVFuYr35RiO3gUvw3supUU9Y32dSFeuYakIk16pZdnWw9+yZX/PhUg+qtr+Lh0Jpn7r8yD+IoUHuKSZjcHzSFnK3ITcvEzSwQskPj9voeDEiibdtY9gEj18kBbOSJ4QFkDa3ItnjGIBOrhv+GLYtamZynuDiaXH0mOmMsVH8NRgplvd3PEyjYQlXXXVPkJmOOp4LZlDQgvj/TUlAFUvwUQux5Db3oNGxulosCzcLcksWzOchw/gqUd4IsPvGpjJkaRfbqCc/dTQpO5PlPwmA4Mb/29RsbftSVnlSU62t+77aDmG5yOAp3nS7vjvpNxyWbYQJeX4A8POwikMcX8NB8JeEJdddsh4plfE6BP8HvAtgXiqf0gkMvZiMZ2JOTe4pU0HyRUCf5mqlYLVqnvbArYjOsQBnK2kOSbeqwjBMiSkbuTA1bLALa8qMRfBMk9aMOk8WjvnncpsipKAG1gvp3OuI2LmHlowhAfUz6nuVRmdES91My/DUn8TmgN4ykFwJJe9zhpK2QRZVrTEYWXPaUVmNkGqbIAtsnb3TdHEj7GeGBMtsghl9E2Ztu/95KX/g8FSFAFFb9TyXxFCRwrJWxKqUpPCoXNGvWUeQiz4vFA//4ks3joy9oPJqNHKhsEKG385WdTi0zV0XRYhE0BBxEa7pcUc+jbyIP3Wbx+NSr8nIaXp+3T3opIp/c5VraaFRXbXUH8G41fjN70MrDvq0rc8D48FjUWpw33Q9oOIOIdj+sBUo1Zm7vXc1zQ1TrZIbHZthVokUw2CMbc2pTjh75zipSzz57XWqJle/ToD815yJKk40oivdrXNwMjHv7WzXkAwA437+N2fRzZMfQot8ArILtHTLRt/NsHKj3bttS1215eex9aYVtUtIZWu3nr6ZJo25y5Bc2MHemMT9R4eipPpN+v4vQLdaId3rbWERf7SFkZrduKplo+S5K4DYl4eFRVtMVeRXVmFu+k75q1RcnBTVpF93rRyUAtc4V2h4pn9BtL0i6WD2ODQnKPaBSswWFaOgP6mVCf4aeMa3bUdbYfqaeD0eBvjwNS00CguqhdURthu7TOFfnoRkPUEH6m9mXsSZB6j04bnOTEbRgn08VUhoaCNTOwe+Vl2RAjU5CaEdsxHt/+3H90DQ0Hi5tnRpYJitpjyAWqKxt/x+s56lY6qJ915gfGgSqlkvRcYlVeHPHH2o/ETqiCWZgqPOoZqFRHhEvOZ+xub7XmMm2rbxigYGVL/Sqs2ZFWd1zKHKwiJaePGzkPb7ap4Ptd2q8W940Yr6QyMGwgXATrt/3pENDpT8lXXzVI7TLqw8xZxuGyBxgHum/1hO0YEfUhctP04mfmdzGSWVi2r+I5idoFCwY/oB1NNLti9wuogG4S0WmOHdAwCwP0yMB7EZK+A1QCLhuQDPc3YzGbeMEl8I3Q9YKMlDU1ug4k+7rcT89JIeSDY74HgejQ4+QzB90pZrMvZtLCiS0Xrk+JxsQCR3Cs/Aw/x5l/PyYIV6+Ib7pBfmjJt8XyW/0PLmUZi9KMtkizNVGyjMBy/u/nfI6NNV5Dhrf4IfYfFIAAAA";export{A as default};
