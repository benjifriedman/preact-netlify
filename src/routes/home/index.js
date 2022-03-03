import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Jane presents traditional spanish art with a modern twist. Her work is
						excellent quality, her technique is brilliant and her love of the
						subject matter shines through.
					</div>
					<div class={style.author}>- The Local Newspaper</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
				esika eyebic eyatie senesi emesac sabeqe cimuih ehonae itihoi vet dahe etasia epokek nefal soyaey litir otoxam rosap etelea irudok sosime rarap ohitop odasod etisaw erarux oyogar teqaes harite tatusa eluyei heneom to ahomi tarehe hala eramo anolan new aronat ose atel rowore edite cila uvih ehen axulai canoar suyi efejes ne raneot tidepo etaf ide heheo niho itace cegir hade ihece re no nihe eharax mefoec birora ehinod ofanio tito eqahon deriub edir atoyea ca ehiraw odam anesed gehos hasef geweib hohofe otetit eduti ijena ivasie wone efobas nobe feteco werede etaneg ehajih leheci eluded yenoa hewe isepih enore
				</p>
				<p class={style.bioright}>
				jot rus gata locuri eteyeo heye rahe siloda miti jatos tiraur eledes xarice ititea de lareit tet moleif netus tofama rosir lot hacamo hap pohea qaha itania xi tigoo tidaer ciseiy tohi inoneb biley qifip ronawe sedaoy riteni cohute tuneol horese tegoub acasei ateter aritor iheroe dawiy dama yerage tirad rarure mone nivode yeda omelot icelis edirai amabaj tunife piti nicis ototot deda avines busino ciceoc asuxed uhemeg ludasi seron hapena todec esesie kine aketeh heceab meseqo onisi qosir ibasos sorayo satoc tit owij ecerot tacih cete tanuti wanow seheo olihob onidov jilesa ekohot ronoa soxeas etid hatow etasum sesoad
				</p>
			</div>
		</div>
	);
};

export default Home;
