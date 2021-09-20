import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getRecipesId, getDiets } from '../../actions/index';
import {Link} from 'react-router-dom'
import chef from '../../img/chef.png';
import './details.css'
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
		<div className='caja'>
				{loading ? (
					<Loading />
				) : recipe.title ? (
					<div className='recipe-container'>
					<div className="container-div">
					<Link to= '/home' className="flecha"><BiArrowBack></BiArrowBack></Link>
						<h1 className='detail-title'>{recipe.title}</h1>
						<div className='detail-container'>
                            {recipe.img ? <img src={recipe.img} alt="not found1" /> : <img src={chef} alt="not found2" />}
								<div className='detail-scores'>
									<h2>
										{recipe.score && 
											`Score: ${recipe.score} Points`}
									</h2>
									<h2>
										{recipe.healthScore &&
											`HealthScore: ${recipe.healthScore}%`}
									</h2>
								</div>
								<div className='detail-diets'>
                                    {recipe.diets && 
									recipe.diets.map(d => <h2> {d} </h2>
                                    )}
								</div>
							<div className='detail-recipe'>
								<h2>{recipe.summary && 'Summary'}</h2>
								<div className='detail-summary'>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.summary,
										}}
									/>
								</div>
								<h2>{recipe.instructions && 'Instructions'}</h2>
								<div className='detail-recipe'>
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
