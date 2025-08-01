'use client'

import React, { useState } from 'react'
import { DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/Button'

interface RubricEditorProps {
  onSave: (rubric: any) => void
  onCancel: () => void
}

export function RubricEditor({ onSave, onCancel }: RubricEditorProps) {
  const [rubric, setRubric] = useState({
    title: '',
    description: '',
    total_points: 100,
    grading_scale: 'chile_1_7'
  })

  const handleSave = () => {
    onSave(rubric)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <DocumentTextIcon className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Editor de Rúbricas</h1>
            <p className="text-blue-100">Crea y edita rúbricas de evaluación</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Título de la Rúbrica
          </label>
          <input
            type="text"
            value={rubric.title}
            onChange={(e) => setRubric(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ej. Rúbrica de Ensayo Argumentativo"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            value={rubric.description}
            onChange={(e) => setRubric(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Descripción general de la evaluación..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Puntos Totales
            </label>
            <input
              type="number"
              value={rubric.total_points}
              onChange={(e) => setRubric(prev => ({ ...prev, total_points: parseInt(e.target.value) || 100 }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Escala de Calificación
            </label>
            <select
              value={rubric.grading_scale}
              onChange={(e) => setRubric(prev => ({ ...prev, grading_scale: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="chile_1_7">Escala Chilena (1.0 - 7.0)</option>
              <option value="percentage">Porcentaje (0 - 100%)</option>
              <option value="points">Puntos Directos</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Estado: <span className="font-medium">Borrador</span>
          </div>
          
          <div className="flex space-x-3">
            <Button onClick={onCancel} variant="outline">
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              Guardar Rúbrica
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RubricEditor
