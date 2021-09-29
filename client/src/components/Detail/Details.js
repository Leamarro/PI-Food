import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getRecipesId} from '../../actions/index';
import {Link} from 'react-router-dom'
import chef from '../../img/chef.png';
import style from './details.module.css'
import {BiArrowBack} from 'react-icons/bi'

import Loading from '../Loading';

export default function Detail({
	match: {
		params: { id },
	},
}) {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipeById);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(getRecipesId(id));
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [dispatch, id]);

	return (
		<div className={style.caja}>
				{loading ? (
					<Loading />
				) : recipe.title ? (
					<div className={style.recipeContainer}>
					<div className={style.containerDiv}>
					<Link to= '/home' className={style.flecha}><BiArrowBack></BiArrowBack></Link>
						<h1 className={style.detailTitle}>{recipe.title}</h1>
						<div className={style.detailContainer}>
                            {recipe.img ? <img src={recipe.img} alt="not found1" /> : <img src={chef} alt="not found2" />}
								<div className={style.detailScores}>
									<h2>
										{recipe.score && 
											`Score: ${recipe.score} Points`}
									</h2>
									<h2>
										{recipe.healthScore &&
											`HealthScore: ${recipe.healthScore}%`}
									</h2>
								</div>
								<div className={style.detailDiets}>
                                    {recipe.diets && 
									recipe.diets.map(d => <h2> {d} </h2>
                                    )}
								</div>
							<div className={style.detailRecipe}>
								<h2>{recipe.summary && 'Summary'}</h2>
								<div className={style.detailSummary}>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.summary,
										}}
									/>
								</div>
								<h2>{recipe.instructions && 'Instructions'}</h2>
								<div className={style.detailRecipe}>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.instructions,
										}}
									/>
								</div>
							</div>
						</div>
						</div>
					</div>
				) : (
					<h1>Something went wrong, please try again!</h1>
				)} 
		</div>
  );
};
