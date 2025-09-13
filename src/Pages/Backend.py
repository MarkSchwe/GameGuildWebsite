import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

def calc(input1,input2,input3,input4,input5):
    #current school, current level, stat, scaled lvl, scaled stat
    df = np.genfromtxt('./dataCSV/statCaps.csv', delimiter=',')
    caps150 = np.ones((7,7))
    caps160 = np.ones((7,7))
    caps170 = np.ones((7,7))
    for i in range(7):
        caps150[i] = df[i]
    for i in range(7):
        caps160[i] = df[i+7]
    for i in range(7):
        caps170[i] = df[i+14]

    input1 = input1.lower()
    school = 0
    if input1 == 'fire':
        school = 0
    elif input1 == 'ice':
        school = 1
    elif input1 == 'storm':
        school = 2
    elif input1 == 'myth':
        school = 3
    elif input1 == 'life':
        school = 4
    elif input1 == 'death':
        school = 5
    elif input1 == 'balance':
        school = 6
    else:
        return -1

    level = np.ones((7,7))
    if (float(input2) >= 150) & (float(input2)< 160):
        level = caps150
    elif (float(input2) >= 160) & (float(input2) < 170):
        level = caps160
    elif (float(input2) >= 170) & (float(input2) < 180):
        level = caps170
    else:
        return -1
    
    input3 = input3.lower()
    stat = 0
    if input3 == 'hp' or input3 == 'health':
        stat = 0
    elif input3 == 'damage' or input3 == 'dmg':
        stat = 1
    elif input3 == 'pierce':
        stat = 2
    elif input3 == 'resist' or input3 == 'res':
        stat = 3
    elif input3 == 'accuracy' or input3 == 'acc':
        stat = 4
    elif input3 == 'outgoing':
        stat = 5
    elif input3 == 'pip' or input3 == 'pip chance' or input3 == 'power pip':
        stat = 6
    else:
        return -1
    
    level2 = np.ones((7,7))
    if (float(input4) >= 150) & (float(input4)< 160):
        level2 = caps150
    elif (float(input4) >= 160) & (float(input4) < 170):
        level2 = caps160
    elif (float(input4) >= 170) & (float(input4) < 180):
        level2 = caps170
    else:
        return -1
    
    scale = float((float(input5)/level[school][stat])*float(level2[school][stat]))
    if float(input5) > float(level[school][stat]):
        scale = float(level2[school][stat])
    
    if float(input2) < float(input4):
        if float(input5) > float(level[school][stat]):
            scale = float(level[school][stat])
        else:
            scale = float(input5)
    
    return int(round(scale,0))

def offschoolcalc(primary,secondary,initlvl,tolvl,dmg):
    df = np.genfromtxt('./dataCSV/offschool.csv', delimiter=',')
    caps150 = np.ones((7,7))
    caps160 = np.ones((7,7))
    caps170 = np.ones((7,7))
    for i in range(7):
        caps170[i] = df[i]
    for i in range(7):
        caps160[i] = df[i+7]
    for i in range(7):
        caps150[i] = df[i+14]
    prim = 0
    if primary == 'fire':
        prim = 0
    elif primary == 'ice':
        prim = 1
    elif primary == 'storm':
        prim = 2
    elif primary == 'myth':
        prim = 3
    elif primary == 'life':
        prim = 4
    elif primary == 'death':
        prim = 5
    elif primary == 'balance':
        prim = 6
    else:
        return -1

    second = 0
    if secondary == 'fire':
        second = 0
    elif secondary == 'ice':
        second = 1
    elif secondary == 'storm':
        second = 2
    elif secondary == 'myth':
        second = 3
    elif secondary == 'life':
        second = 4
    elif secondary == 'death':
        second = 5
    elif secondary == 'balance':
        second = 6
    else:
        return -1

    level = np.ones((7,7))
    if (float(initlvl) >= 150) & (float(initlvl)< 160):
        level = caps150
    elif (float(initlvl) >= 160) & (float(initlvl) < 170):
        level = caps160
    elif (float(initlvl) >= 170) & (float(initlvl) < 180):
        level = caps170
    else:
        return -1

    level2 = np.ones((7,7))
    if (float(tolvl) >= 150) & (float(tolvl)< 160):
        level2 = caps150
    elif (float(tolvl) >= 160) & (float(tolvl) < 170):
        level2 = caps160
    elif (float(tolvl) >= 170) & (float(tolvl) < 180):
        level2 = caps170
    else:
        return -1
    scale = float((float(dmg)/level[prim][second])*float(level2[prim][second]))
    if float(dmg) > float(level[prim][second]):
        scale = float(level2[prim][second])
    
    if int(initlvl) < int(tolvl):
        if float(dmg) > float(level[prim][second]):
            scale = float(level[prim][second])
        else:
            scale = float(dmg)
    return int(round(scale,0))

def revCalc(schooln,ScaedLevel,desired_stat,PreScaledlevel,current_stat):
    lvl = float(ScaedLevel)
    desLvl = float(PreScaledlevel)
    curstat = float(current_stat)

    df = np.genfromtxt('./dataCSV/statCaps.csv', delimiter=',')
    caps150 = np.ones((7,7))
    caps160 = np.ones((7,7))
    caps170 = np.ones((7,7))
    #Extracts Stat Caps from imported csv
    for i in range(7):
        caps150[i] = df[i]
    for i in range(7):
        caps160[i] = df[i+7]
    for i in range(7):
        caps170[i] = df[i+14]

    #School
    schooln = schooln.lower()
    school = 0
    if schooln == 'fire':
        school = 0
    elif schooln == 'ice':
        school = 1
    elif schooln == 'storm':
        school = 2
    elif schooln == 'myth':
        school = 3
    elif schooln == 'life':
        school = 4
    elif schooln == 'death':
        school = 5
    elif schooln == 'balance':
        school = 6
    else:
        return -1

    #Checks what cap the scaled level is
    level = np.ones((7,7))
    if (lvl >= 150) & (lvl < 160):
        level = caps150
    elif (lvl >= 160) & (lvl < 170):
        level = caps160
    elif (lvl >= 170) & (lvl < 180):
        level = caps170
    else:
        return -1
    
    #checks what cap the unscaled level is
    level2 = np.ones((7,7))
    if (desLvl >= 150) & (desLvl < 160):
        level2 = caps150
    elif (desLvl >= 160) & (desLvl < 170):
        level2 = caps160
    elif (desLvl >= 170) & (desLvl < 180):
        level2 = caps170
    else:
        return -1

    #Checks what stat you want to check
    desired_stat = desired_stat.lower()
    stat = 0
    if desired_stat == 'hp' or desired_stat == 'health':
        stat = 0
    elif desired_stat == 'damage' or desired_stat == 'dmg':
        stat = 1
    elif desired_stat == 'pierce':
        stat = 2
    elif desired_stat == 'resist' or desired_stat == 'res':
        stat = 3
    elif desired_stat == 'accuracy' or desired_stat == 'acc':
        stat = 4
    elif desired_stat == 'outgoing':
        stat = 5
    elif desired_stat == 'pip' or desired_stat == 'pip chance' or desired_stat == 'power pip':
        stat = 6
    else:
        return -1
    

    scale = float((curstat/level[school][stat])*float(level2[school][stat]))
    
    if curstat > float(level[school][stat]):
        scale = float(level2[school][stat])

    if lvl > desLvl:
        return -2

    return int(round(scale,0))

@app.route('/process', methods=['POST'])
def process():
    try:
        data = request.get_json(force=True)

        call = data.get('tool', '')
        primary = data.get('prim', '')
        Secondary = data.get('seco', '')
        initlvl = data.get('initlvl', 0)
        tolvl = data.get('tolvl', 0)
        stat = data.get('stat', '')
        curstat = data.get('curStat', 0)

        if call == 'main':
            #current school, current level, stat, scaled lvl, scaled stat
            result = calc(primary,initlvl,stat,tolvl,curstat)
        elif call == 'rev':
            #current school, current level, stat, scaled lvl, scaled stat
            result = revCalc(primary,initlvl,stat,tolvl,curstat)
        elif call == 'offschool':
            result = offschoolcalc(primary,Secondary,initlvl,tolvl,curstat)
        else:
            result = -1

        
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True, port=5000)
