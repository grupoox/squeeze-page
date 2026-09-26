/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomizeToolbar } from './components/CustomizeToolbar';
import { SqueezePageNew } from './components/SqueezePageNew';
import { ComparisonViewer } from './components/ComparisonViewer';
import { AuditSection } from './components/AuditSection';
import { CodeExporter } from './components/CodeExporter';
import { StoryReaderModal } from './components/StoryReaderModal';
import { DeviceMode, SqueezePageConfig, StoryExcerpt, ViewMode } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('redesign');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [selectedStory, setSelectedStory] = useState<StoryExcerpt | null>(null);

  const [config, setConfig] = useState<SqueezePageConfig>({
    headline: 'Nem sempre com finais felizes, mas sempre verdadeiras.',
    subheadline:
      'Histórias reais de amor, desencontros e recomeços. Para ler com calma no domingo de manhã, enquanto o café ainda está quente.',
    scheduleText: 'Todo domingo às 08:08',
    subscriberCount: '+18.400 leitores sensíveis',
    readingTime: 'Leitura de 4 min',
    ctaText: 'Receber no Domingo às 08:08',
    theme: 'editorial',
    showTeaser: true,
    showSocialProof: true,
    showGuarantee: true,
  });

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans">
      {/* Top Application Toolbar */}
      <CustomizeToolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        deviceMode={deviceMode}
        setDeviceMode={setDeviceMode}
        config={config}
        setConfig={setConfig}
      />

      {/* Main View Area */}
      <div className="flex-1 flex flex-col">
        {viewMode === 'redesign' && (
          <div className="flex-1 flex justify-center py-0 md:py-4">
            <div
              className={`w-full transition-all duration-300 ${
                deviceMode === 'mobile'
                  ? 'max-w-[400px] my-4 rounded-3xl shadow-2xl border-8 border-stone-800 overflow-hidden min-h-[820px]'
                  : deviceMode === 'tablet'
                  ? 'max-w-[768px] my-4 rounded-2xl shadow-xl border-4 border-stone-700 overflow-hidden min-h-[900px]'
                  : 'max-w-full'
              }`}
            >
              <SqueezePageNew
                config={config}
                onOpenStoryModal={(story) => setSelectedStory(story)}
              />
            </div>
          </div>
        )}

        {viewMode === 'compare' && (
          <div className="py-4">
            <ComparisonViewer
              config={config}
              onOpenStoryModal={(story) => setSelectedStory(story)}
            />
          </div>
        )}

        {viewMode === 'audit' && (
          <div className="py-4">
            <AuditSection />
          </div>
        )}

        {viewMode === 'export' && (
          <div className="py-4">
            <CodeExporter config={config} />
          </div>
        )}
      </div>

      {/* Interactive Story Reader Modal */}
      <StoryReaderModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onSubscribeClick={() => {
          setSelectedStory(null);
          // Scroll to form smoothly
          const formElement = document.getElementById('formulario');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
