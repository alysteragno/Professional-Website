import SkillList from './skillList';
import { skills, skillList, tools } from './skills';

export default function SkillsInfo( {  }) {
    return(
        <div>
            <h2 className='component-name'>Mastery</h2>

            <SkillList skills = {skills.slice(0,3)} />
            <SkillList skills = {skillList.slice(0,2)} />
            <SkillList skills = {tools.slice(0,1)} />
            <div>
                <progress className="progress w-56" value={0} max="100"></progress>
                <progress className="progress w-56" value="10" max="100"></progress>
                <progress className="progress w-56" value="40" max="100"></progress>
                <progress className="progress w-56" value="70" max="100"></progress>
                <progress className="progress w-56" value="100" max="100"></progress>
            </div>
        </div>
    )
}