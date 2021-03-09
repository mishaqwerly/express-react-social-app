import React from 'react'
import './ArticleForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useMutation, useQuery} from 'react-query'
import {createArticle, getArticleById} from '.././../hooks/ApiArticles';
import PropTypes from 'prop-types';

const ArticlesSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  text: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
});

export default function AddArticles({isEdit}) {

  const createArticleMutation = useMutation(newArticle => createArticle(newArticle), {
    onSuccess: () => {
      alert('Success')
    },
  })

  function handleSubmit(data) {
    if (!isEdit) {
      createArticleMutation.mutate(data)
    } else {
      //editArticleMutation.mutate(data)
    }
  }

  return (
    <div className="add-articles page">
      <div>
        <div>
          <h1>{isEdit ? 'Edit Article' : 'Add Article'}</h1>
          <Formik
            initialValues={{ title: '', text: '', available: 'all', userId: 1 }}
            validationSchema={ArticlesSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false)
              resetForm(false)
              handleSubmit(values)}
            }
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <div>title</div>
                  <Field type="text" name="title" />
                  <ErrorMessage name="title" component="div" className="error" />
                </div>
                <div>
                  <div>text</div>
                  <Field component="textarea" type="text" name="text" />
                  <ErrorMessage name="text" component="div" className="error" />
                </div>
                <div>
                  <div>Available to</div>
                  <Field
                    name="available" 
                    component="select" 
                    placeholder="Your Gender">   
                    All / Friends / Only Me
                      <option value="all">All</option>
                      <option value="friends">Friends</option>
                      <option value="me">Only Me</option>
                  </Field>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

AddArticles.propTypes = {
  isEdit: PropTypes.bool
};
