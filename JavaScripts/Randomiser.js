var randomFromList = [
    'https://lh3.googleusercontent.com/pw/AM-JKLUqtLQHuhC1dX2Q291qkX1Plaa_VDmPYgfmQvTeVKnCqAyQNRIlITt3vMCzxf63lbphlvk5jZLZMFrAjcj0lYcznATPKrp05V9w_Lm5R6eigcwdwIQmskPZ_SIy5U4Y49AUUoy0DmrR8tqLfaWaq4-P=w759-h627',
    'https://lh3.googleusercontent.com/pw/AM-JKLXnrc5wKlz_p3OqZgn2BZyULGwtAEd_c1fTUHxVJdqH5Do2ziCQDW32wA3tHIElknif0YYxVdgA-64qJzwd7iRl0gwKPgruzCJ2vjyRTTGoJ6Vrr4IX0grlxzbn1rlMwqTUNHjhQYPF7yO1UimxJ3De=w723-h627',
    'https://lh3.googleusercontent.com/pw/AM-JKLUy4vpPerfkRMXwu03s3RfFmii8bjmPr2UkNrtzghX_2o00txUIPvMWhh9F9VwCbkItd-BDzDlYZRz1xElg7gxFSlqWfvM9EMmlrYdWqusB-aguvJmDLLJ-OCZj7IYpPt7JqtQtfnNg10wN25zuVtlp=w1115-h627',
    'lh3.googleusercontent.com/pw/AM-JKLX_aiylOfh22coLQp-j_v2ho9mEXE_hQdJHpxRyny8yMF_gbEWlBJrGsHC5OZFHyJNq9oWxM8A5Z2zt_WiPVaqnGuSZ-Ilb049dC3-0p4OCiB1_5I_ywBOP_SfjE0rqSk1sR3JRBVFzdgU8L7X0kxfk=w823-h627'
  ]

  var randomiser = Math.floor(Math.random()*randomFromList.length);

  document.getElementById("randomIMG").src = randomFromList[randomiser];

  var randomFromList = [
    'https://bit.ly/2ZOdLHS',
    'https://bit.ly/2FIQ78T',
    'https://bit.ly/3mvfiMF',
    'https://bit.ly/2EaFHho'
  ]

  var randomiser = Math.floor(Math.random()*randomFromList.length);

  document.getElementById("randomcustomIMG").src = randomFromList[randomiser];
