import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getDiets } from "../../actions/index";
import swal from 'sweetalert';

import style from './form.module.css';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from 'axios';


const formData = {
  title: '',
  spoonacularScore: '',
  healthScore: '',
	instructions: '',
  summary: '',
  diets: [],
};


//validaciones
export const validate = (recipe) => {
  let error = {};

  if (!recipe.title) error.title = "Title required";
  if (!recipe.summary) error.summary = "Summary required";
  
  if (!recipe.instructions) error.instructions = "Tsype an instruction";

  if (!/^([0-9])*$/.test(recipe.spoonacularScore)) error.spoonacularScore = "SpoonacularScore is not a number";
  else if (recipe.spoonacularScore < 0 || recipe.spoonacularScore > 100)
    error.spoonacularScore = "SpoonacularScore must be between 0 and 100";

  if (!/^([0-9])*$/.test(recipe.healthScore))
    error.healthScore = "HealthScore is not a number";
  else if (recipe.healthScore < 0 || recipe.healthScore > 100)
    error.healthScore = "HealthScore must be between 0 and 100";

  if (recipe.diets.length === 0) error.diet = "Select at least one diet";

  return error;
};

const Form = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  const [form, setForm] = useState(formData);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleChange = (e) => {
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
        setForm({
            ...form,
            diets: [...form.diets, e.target.id],
        });
        console.log(form.diets.title);
    } else {
        setForm({
            ...form,
            diets: [...form.diets].filter((diet) => e.target.id !== diet),
        });
    }
};

  const handleSubmit = (e) => {
      e.preventDefault();

      if(
      !error.title && form.title &&
      !error.spoonacularScore && form.spoonacularScore &&
      !error.healthScore && form.healthScore &&
      !error.instructions && form.instructions &&
      !error.summary && form.summary &&
      form.diets.length){

        //console.log("formulario correcto");
        
        axios.post('http://localhost:3001/recipe', form)

        //console.log("se envio la receta");
        swal({
            title: "Good job!",
            text: "Successfully added!",
            icon: "success",
            button: "Confirm",
          });
          
        setForm(formData);
      } else {
        swal({
            title: "Error",
            text: "Incorrect data, please try again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
      }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(formData);
    setError({});
  };

  return (
    <div className={style.formMainContainer}>
      <div className={style.formContainer}>
        
      <form className={style.formDiv}>
      <div className={style.formItems}>
      <h1 className={style.formTitle}>Create your own recipe!</h1>
          <p className={error.title ? 'danger' : 'pass'}>{error.title}</p>
          <input
            type="text"
            value={form.title}
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            className={error.title & 'danger'}
          />
          
          
          <p className={error.spoonacularScore ? 'danger' : 'pass'}>{error.spoonacularScore}</p>
          <input
            type="text"
            value={form.spoonacularScore}
            id="spoonacularScore"
            name="spoonacularScore"
            onChange={handleChange}
            placeholder="Score"
            className={error.spoonacularScore & 'danger'}

          />

        <p className={error.healthScore ? 'danger' : 'pass'}>{error.healthScore}</p>
          <input
            type="text"
            value={form.healthScore}
            id="healthScore"
            name="healthScore"
            onChange={handleChange}
            placeholder="healthScore"
            className={error.healthScore & 'danger'}

          />
        <p className={error.summary ? 'danger' : 'pass'}>{error.summary}</p>
          <textarea
            name="summary"
            id="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Summary"
            className={error.summary & 'danger'}

          ></textarea>
        <p className={error.instructions ? 'danger' : 'pass'}>{error.instructions}</p>
          <textarea
            name="instructions"
            id="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="Instructions"
            className={error.instructions & 'danger'}
          ></textarea>
          </div>
          
          <div className={style.dietsContainer}>
              
            {diets.length > 0 &&
                diets.map((diet) => (
                  <label
											htmlFor={diet.id
												.toLowerCase()
												.replace(' ', '')
												.replace('-', '')}
                        className={style.textLabel}
										>
                   
											<input
												id={diet.id
													.toLowerCase()
													.replace(' ', '')
													.replace('-', '')}
												type='checkbox'
												name={diet.title
													.toLowerCase()
													.replace(' ', '')
													.replace('-', '')}
												onChange={handleChecked}
											/>
											<span class='checkboxtext'> {diet.title} </span>
										</label>
                )) }
          </div>
       <div className={style.formButtons}>
        <button onClick={handleReset} className={style.btnReset}> <DeleteIcon /> </button>
        <button onClick={handleSubmit} className={style.btnCreate}> <SendIcon /> </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Form;
